from pydantic import BaseModel, Field
from typing import Optional


# ===================== REQUEST MODELS =====================

class PlagiarismCheckRequest(BaseModel):
    application_id: str = Field(..., description="Application ID for tracking")
    candidate_name: str = Field(..., description="Candidate name")
    cover_letter: str = Field(..., description="Cover letter text to check")
    job_title: str = Field(default="", description="Job being applied to")
    existing_texts: list[str] = Field(
        default=[],
        description="All other cover letters already in the system (passed by backend)"
    )


class SpamCheckRequest(BaseModel):
    application_id: str
    candidate_email: str
    candidate_name: str
    cover_letter: str = Field(default="")
    resume_text: str = Field(default="")
    applications_count_today: int = Field(
        default=0,
        description="How many jobs this candidate applied to today"
    )
    same_ip_count: int = Field(
        default=0,
        description="Applications from same IP in last hour"
    )


class AnalysisRequest(BaseModel):
    """Full analysis — plagiarism + spam in one call"""
    application_id: str
    candidate_name: str
    candidate_email: str
    cover_letter: str
    resume_text: str = ""
    job_title: str = ""
    existing_cover_letters: list[str] = []
    applications_count_today: int = 0
    same_ip_count: int = 0


class BulkAnalysisRequest(BaseModel):
    applications: list[AnalysisRequest]


# ===================== RESPONSE MODELS =====================

class PlagiarismResult(BaseModel):
    application_id: str
    similarity_score: float = Field(..., description="0.0 - 1.0 (1.0 = identical)")
    similarity_percent: int   = Field(..., description="0 - 100")
    is_plagiarised: bool      = Field(..., description="True if > 70% similar")
    risk_level: str           = Field(..., description="low | medium | high | critical")
    matched_segments: list[str] = Field(default=[], description="Suspicious matched phrases")
    top_match_index: Optional[int] = Field(default=None, description="Index of most similar existing text")
    verdict: str


class SpamResult(BaseModel):
    application_id: str
    is_spam: bool
    spam_score: float         = Field(..., description="0.0 - 1.0")
    spam_percent: int
    risk_level: str
    flags: list[str]          = Field(default=[], description="Reasons flagged as spam")
    verdict: str


class FullAnalysisResult(BaseModel):
    application_id: str
    candidate_name: str
    plagiarism: PlagiarismResult
    spam: SpamResult
    overall_risk: str           = Field(..., description="low | medium | high | critical")
    recommendation: str         = Field(..., description="clear | review | reject")
    summary: str
