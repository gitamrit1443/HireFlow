"""
HireFlow Plagiarism & Spam Detection Service
FastAPI + Python — runs as a separate microservice on port 8000
ASP.NET Core backend calls this when recruiter checks an application.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

from routers import plagiarism, spam, health
from models.request_models import AnalysisRequest, BulkAnalysisRequest

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("hireflow-plagiarism")


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("HireFlow Plagiarism Service starting...")
    yield
    logger.info("HireFlow Plagiarism Service shutting down.")


app = FastAPI(
    title="HireFlow Plagiarism & Spam Detection API",
    description="Real-time cover letter plagiarism and spam detection for HireFlow recruiters.",
    version="1.0.0",
    lifespan=lifespan
)

# CORS — allow ASP.NET backend to call this
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5000", "http://localhost:7001", "https://hireflow.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(plagiarism.router, prefix="/api/plagiarism", tags=["Plagiarism"])
app.include_router(spam.router,       prefix="/api/spam",       tags=["Spam"])
app.include_router(health.router,     prefix="/api",            tags=["Health"])


@app.get("/")
def root():
    return {
        "service": "HireFlow Plagiarism & Spam Detection",
        "version": "1.0.0",
        "status": "running",
        "endpoints": {
            "plagiarism_check": "POST /api/plagiarism/check",
            "spam_check":       "POST /api/spam/check",
            "bulk_check":       "POST /api/plagiarism/bulk",
            "health":           "GET  /api/health"
        }
    }
