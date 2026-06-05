from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "HireFlow Plagiarism & Spam Detection",
        "timestamp": datetime.utcnow().isoformat()
    }
