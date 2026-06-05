"""
Spam Detection Service
Detects:
  - Mass application spamming (too many apps/day)
  - Generic/template cover letters
  - Keyword stuffing
  - Suspiciously short/empty applications
  - Repeated same-text submissions
  - Same-IP bulk applications
"""

import re
import math
from collections import Counter


# ---- Generic phrase detection ----
GENERIC_PHRASES = [
    "i am writing to express my interest",
    "i am a hard working and dedicated",
    "i believe i am the perfect candidate",
    "please find attached my resume",
    "to whom it may concern",
    "i am very passionate about",
    "i have excellent communication skills",
    "i am a team player",
    "i look forward to hearing from you",
    "dear hiring manager",
    "i am highly motivated",
    "i have a strong work ethic",
    "i am eager to learn",
    "with great enthusiasm",
    "i am confident that",
    "i would be a great asset",
    "please consider my application",
    "thank you for your consideration",
    "i am a quick learner",
    "i am writing to apply for",
]

# ---- Keyword stuffing patterns ----
FILLER_WORDS = {
    "passionate", "driven", "motivated", "dedicated", "hardworking",
    "team player", "self-starter", "results-oriented", "detail-oriented",
    "dynamic", "synergy", "leverage", "proactive", "innovative"
}


def check_spam(
    application_id: str,
    candidate_email: str,
    cover_letter: str,
    resume_text: str = "",
    applications_count_today: int = 0,
    same_ip_count: int = 0
) -> dict:
    """
    Multi-signal spam analysis.
    Returns structured result with flags and score.
    """
    flags: list[str] = []
    score = 0.0

    # ---- Signal 1: Mass applying ----
    if applications_count_today >= 20:
        flags.append(f"Mass applying: {applications_count_today} applications today")
        score += 0.50
    elif applications_count_today >= 10:
        flags.append(f"High application rate: {applications_count_today} applications today")
        score += 0.25
    elif applications_count_today >= 5:
        score += 0.10

    # ---- Signal 2: Same IP bulk submissions ----
    if same_ip_count >= 10:
        flags.append(f"Bot-like behaviour: {same_ip_count} applications from same IP in 1 hour")
        score += 0.40
    elif same_ip_count >= 5:
        flags.append(f"Multiple applications from same IP: {same_ip_count}")
        score += 0.20

    # ---- Signal 3: Empty or very short cover letter ----
    cl_words = len(cover_letter.split()) if cover_letter.strip() else 0
    if cl_words == 0:
        flags.append("No cover letter provided")
        score += 0.20
    elif cl_words < 20:
        flags.append(f"Cover letter too short ({cl_words} words)")
        score += 0.15

    # ---- Signal 4: Generic/template cover letter ----
    if cover_letter.strip():
        cl_lower = cover_letter.lower()
        generic_hits = sum(1 for p in GENERIC_PHRASES if p in cl_lower)
        if generic_hits >= 5:
            flags.append(f"Generic template detected ({generic_hits} template phrases found)")
            score += 0.30
        elif generic_hits >= 3:
            flags.append(f"Possible template ({generic_hits} common phrases)")
            score += 0.15

        # ---- Signal 5: Keyword stuffing ----
        words = re.findall(r'\b\w+\b', cl_lower)
        total = len(words)
        if total > 0:
            filler_count = sum(1 for w in words if w in FILLER_WORDS)
            filler_ratio = filler_count / total
            if filler_ratio > 0.15:
                flags.append(f"Keyword stuffing detected ({filler_count} buzzwords in {total} words)")
                score += 0.20

        # ---- Signal 6: All caps or excessive punctuation ----
        if sum(1 for c in cover_letter if c.isupper()) / max(len(cover_letter), 1) > 0.4:
            flags.append("Excessive capitalisation")
            score += 0.10

        # ---- Signal 7: Repeated words (gibberish) ----
        if total > 10:
            word_freq = Counter(words)
            most_common_ratio = word_freq.most_common(1)[0][1] / total
            if most_common_ratio > 0.10:
                flags.append("Repetitive word usage (possible gibberish)")
                score += 0.15

    # ---- Signal 8: Suspicious email patterns ----
    if candidate_email:
        if re.match(r'^[a-z]{1,3}\d{6,}@', candidate_email.lower()):
            flags.append("Suspicious email pattern (possible bot-generated email)")
            score += 0.20

    # Clamp score to 1.0
    score = min(score, 1.0)
    pct   = round(score * 100)

    if score >= 0.70:
        risk    = "critical"
        is_spam = True
        verdict = "⛔ High spam probability. Recommend rejecting."
    elif score >= 0.45:
        risk    = "high"
        is_spam = True
        verdict = "🔴 Likely spam. Manual review required."
    elif score >= 0.25:
        risk    = "medium"
        is_spam = False
        verdict = "🟡 Some spam signals detected. Keep an eye on this application."
    else:
        risk    = "low"
        is_spam = False
        verdict = "✅ Appears legitimate."

    return {
        "application_id": application_id,
        "is_spam":        is_spam,
        "spam_score":     round(score, 4),
        "spam_percent":   pct,
        "risk_level":     risk,
        "flags":          flags,
        "verdict":        verdict
    }
