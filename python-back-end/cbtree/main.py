from fastapi import FastAPI     
from routers import (auth, user) 

app = FastAPI()
print('test')
app.include_router(auth.router)
app.include_router(user.router)

