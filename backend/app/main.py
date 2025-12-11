from fastapi import FastAPI
from dotenv import load_dotenv
from app.routes import trails_router, steps_router

load_dotenv()
app = FastAPI()

app.include_router(trails_router)
app.include_router(steps_router)