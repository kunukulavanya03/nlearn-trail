from fastapi import FastAPI
from app import models, routes, auth
from app.database import Base, engine
from app.settings import settings

Base.metadata.create_all(engine)

app = FastAPI()

app.include_router(routes.router)
app.include_router(auth.router)