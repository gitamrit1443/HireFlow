"""
Plagiarism Detection Service
Uses TF-IDF cosine similarity + n-gram phrase matching.
No external API needed — fully local, real-time.
"""

import re
import math
from collections import Counter
from typing import Optional


def _clean(text: str) -> str:
    """Normalise text for comparison."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s]', ' ', text)   # remove punctuation
    text = re.sub(r'\s+', ' ', text)        # collapse whitespace
    return text


def _tokenise(text: str) -> list[str]:
    return _clean(text).split()


def _tfidf_cosine_similarity(text_a: str, text_b: str) -> float:
    """
    Compute cosine similarity using raw TF (no IDF needed for pairwise).
    Returns 0.0 – 1.0.
    """
    tokens_a = _tokenise(text_a)
    tokens_b = _tokenise(text_b)

    if not tokens_a or not tokens_b:
        return 0.0

    freq_a = Counter(tokens_a)
    freq_b = Counter(tokens_b)

    vocab = set(freq_a) | set(freq_b)
    dot   = sum(freq_a.get(w, 0) * freq_b.get(w, 0) for w in vocab)
    norm_a = math.sqrt(sum(v ** 2 for v in freq_a.values()))
    norm_b = math.sqrt(sum(v ** 2 for v in freq_b.values()))

    if norm_a == 0 or norm_b == 0:
        return 0.0

    return dot / (norm_a * norm_b)


def _extract_ngrams(text: str, n: int = 6) -> set[str]:
    """Extract all n-grams (default 6-word phrases) from text."""
    tokens = _tokenise(text)
    if len(tokens) < n:
        return set()
    return {' '.join(tokens[i:i+n]) for i in range(len(tokens) - n + 1)}


def _find_matched_segments(text_a: str, text_b: str, min_words: int = 8) -> list[str]:
    """Find exact matching phrases of min_words or more."""
    matches = []
    ngrams_b = _extract_ngrams(text_b, min_words)
    ngrams_a = _extract_ngrams(text_a, min_words)
    common = ngrams_a & ngrams_b
    # Deduplicate overlapping phrases
    seen: set[str] = set()
    for phrase in sorted(common, key=len, reverse=True):
        if not any(phrase in s for s in seen):
            matches.append(phrase)
            seen.add(phrase)
        if len(matches) >= 5:   # Return top 5 suspicious segments
            break
    return matches


def check_plagiarism(
    text: str,
    existing_texts: list[str],
    application_id: str = "unknown"
) -> dict:
    """
    Main plagiarism check.
    Compares `text` against all `existing_texts`.
    Returns a detailed result dict.
    """
    if not text.strip():
        return _build_result(application_id, 0.0, [], None, "Empty text submitted.")

    if not existing_texts:
        return _build_result(application_id, 0.0, [], None,
                             "No existing applications to compare against.")

    best_score   = 0.0
    best_index   = None
    best_matches: list[str] = []

    for i, existing in enumerate(existing_texts):
        if not existing.strip():
            continue
        score = _tfidf_cosine_similarity(text, existing)
        if score > best_score:
            best_score   = score
            best_index   = i
            best_matches = _find_matched_segments(text, existing)

    return _build_result(application_id, best_score, best_matches, best_index)


def _build_result(
    application_id: str,
    score: float,
    matched: list[str],
    top_index: Optional[int],
    override_verdict: Optional[str] = None
) -> dict:
    pct = round(score * 100)

    if score >= 0.90:
        risk     = "critical"
        plagiarised = True
        verdict  = "⛔ Near-identical copy detected. Likely plagiarised."
    elif score >= 0.70:
        risk     = "high"
        plagiarised = True
        verdict  = "🔴 High similarity detected. Strongly recommend manual review."
    elif score >= 0.45:
        risk     = "medium"
        plagiarised = False
        verdict  = "🟡 Moderate similarity. Could be a template. Review recommended."
    elif score >= 0.25:
        risk     = "low"
        plagiarised = False
        verdict  = "🟢 Low similarity. Appears original."
    else:
        risk     = "low"
        plagiarised = False
        verdict  = "✅ Original. No significant matches found."

    if override_verdict:
        verdict = override_verdict

    return {
        "application_id":  application_id,
        "similarity_score": round(score, 4),
        "similarity_percent": pct,
        "is_plagiarised":  plagiarised,
        "risk_level":      risk,
        "matched_segments": matched,
        "top_match_index": top_index,
        "verdict":         verdict
    }
