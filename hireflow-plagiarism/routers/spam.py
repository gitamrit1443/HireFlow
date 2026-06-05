from fastapi import APIRouter, HTTPException
from models.request_models import SpamCheckRequest
from services.spam_service import check_spam

router = APIRouter()


@router.post("/check")
def spam_check(request: SpamCheckRequest):
    """
    Standalone spam check for a single application.
    """
    result = check_spam(
        application_id=request.application_id,
        candidate_email=request.candidate_email,
        cover_letter=request.cover_letter,
        resume_text=request.resume_text,
        applications_count_today=request.applications_count_today,
        same_ip_count=request.same_ip_count
    )
    return {"success": True, "data": result}
