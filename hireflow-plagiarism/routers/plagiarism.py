from fastapi import APIRouter, HTTPException
from models.request_models import (
    PlagiarismCheckRequest, AnalysisRequest, BulkAnalysisRequest, FullAnalysisResult
)
from services.plagiarism_service import check_plagiarism
from services.spam_service import check_spam

router = APIRouter()


@router.post("/check")
def plagiarism_check(request: PlagiarismCheckRequest):
    """
    Check a single cover letter for plagiarism against existing ones.
    Call this when recruiter opens an application detail page.
    """
    if not request.cover_letter.strip():
        raise HTTPException(status_code=400, detail="cover_letter cannot be empty.")

    result = check_plagiarism(
        text=request.cover_letter,
        existing_texts=request.existing_texts,
        application_id=request.application_id
    )
    return {"success": True, "data": result}


@router.post("/full-analysis")
def full_analysis(request: AnalysisRequest):
    """
    Full analysis — plagiarism + spam in one call.
    This is the primary endpoint called by the ASP.NET backend.
    Returns combined result that frontend displays to recruiter.
    """
    plagiarism_result = check_plagiarism(
        text=request.cover_letter,
        existing_texts=request.existing_cover_letters,
        application_id=request.application_id
    )

    spam_result = check_spam(
        application_id=request.application_id,
        candidate_email=request.candidate_email,
        cover_letter=request.cover_letter,
        resume_text=request.resume_text,
        applications_count_today=request.applications_count_today,
        same_ip_count=request.same_ip_count
    )

    # Overall risk = worst of both
    risk_order = {"low": 0, "medium": 1, "high": 2, "critical": 3}
    p_risk = plagiarism_result["risk_level"]
    s_risk = spam_result["risk_level"]
    overall_risk = p_risk if risk_order[p_risk] >= risk_order[s_risk] else s_risk

    # Recommendation
    if overall_risk == "critical":
        recommendation = "reject"
        summary = f"⛔ {request.candidate_name}'s application has critical issues — plagiarism: {plagiarism_result['similarity_percent']}%, spam score: {spam_result['spam_percent']}%."
    elif overall_risk == "high":
        recommendation = "review"
        summary = f"🔴 {request.candidate_name}'s application needs manual review — plagiarism: {plagiarism_result['similarity_percent']}%, spam score: {spam_result['spam_percent']}%."
    elif overall_risk == "medium":
        recommendation = "review"
        summary = f"🟡 {request.candidate_name}'s application has minor concerns. Plagiarism: {plagiarism_result['similarity_percent']}%, spam score: {spam_result['spam_percent']}%."
    else:
        recommendation = "clear"
        summary = f"✅ {request.candidate_name}'s application looks clean. Plagiarism: {plagiarism_result['similarity_percent']}%, spam score: {spam_result['spam_percent']}%."

    return {
        "success": True,
        "data": {
            "application_id": request.application_id,
            "candidate_name": request.candidate_name,
            "plagiarism": plagiarism_result,
            "spam": spam_result,
            "overall_risk": overall_risk,
            "recommendation": recommendation,
            "summary": summary
        }
    }


@router.post("/bulk")
def bulk_analysis(request: BulkAnalysisRequest):
    """
    Analyse multiple applications at once.
    Useful for recruiter dashboard batch review.
    """
    if len(request.applications) > 50:
        raise HTTPException(status_code=400, detail="Max 50 applications per bulk request.")

    results = []
    for app in request.applications:
        plagiarism_result = check_plagiarism(
            text=app.cover_letter,
            existing_texts=app.existing_cover_letters,
            application_id=app.application_id
        )
        spam_result = check_spam(
            application_id=app.application_id,
            candidate_email=app.candidate_email,
            cover_letter=app.cover_letter,
            resume_text=app.resume_text,
            applications_count_today=app.applications_count_today,
            same_ip_count=app.same_ip_count
        )
        results.append({
            "application_id": app.application_id,
            "candidate_name": app.candidate_name,
            "plagiarism_percent": plagiarism_result["similarity_percent"],
            "spam_percent": spam_result["spam_percent"],
            "overall_risk": plagiarism_result["risk_level"]
                if plagiarism_result["similarity_percent"] >= spam_result["spam_percent"]
                else spam_result["risk_level"],
            "is_flagged": plagiarism_result["is_plagiarised"] or spam_result["is_spam"]
        })

    flagged = [r for r in results if r["is_flagged"]]
    return {
        "success": True,
        "data": {
            "total": len(results),
            "flagged_count": len(flagged),
            "results": results
        }
    }
