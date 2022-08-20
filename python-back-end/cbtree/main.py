from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, user, thoughtrecord

description = """The Backend for CBTree"""

app = FastAPI(title="CBTree Thought Record API", description=description,version="1.0", contact={
    "name": "Kyle Christensen",
    "url": "https://github.com/kylehgc/",
    "email": "kylehgc@gmail.com",
  
},)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(thoughtrecord.router)
