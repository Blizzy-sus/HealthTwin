# NOT A MEDICAL DEVICE
"""
Health Twin AI — Backend API
Creates a personalized digital twin of every patient, detects health
deterioration before symptoms become obvious, and shows how today's
choices change tomorrow's health.
"""

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from routers import twin, reports, symptoms, simulator, family

load_dotenv()

app = FastAPI(
    title="Health Twin AI",
    description=(
        "Personalized digital health twin API. "
        "NOT A MEDICAL DEVICE — for informational purposes only."
    ),
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter(prefix="/api")
api_router.include_router(twin.router)
api_router.include_router(reports.router)
api_router.include_router(symptoms.router)
api_router.include_router(simulator.router)
api_router.include_router(family.router)

app.include_router(api_router)

@app.get("/api/health", tags=["health"])
def health_check():
    """Root health-check endpoint."""
    return {"status": "healthy", "service": "Health Twin AI"}

@app.get("/", tags=["health"])
def root_health_check():
    return {"status": "healthy", "service": "Health Twin AI"}
