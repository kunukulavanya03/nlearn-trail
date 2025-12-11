from fastapi import APIRouter
from app.models import Trail, Step
from app.database import get_db

trails_router = APIRouter()