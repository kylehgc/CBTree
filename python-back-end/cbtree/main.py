from fastapi import FastAPI
from pydantic import BaseModel, NameEmail

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/fraser/")
def say_hi():
    return {
        "this is my api": "welcome",
        "name": "fraser",
        "age": 33,
        "hair": "red as the sun",
    }


@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
