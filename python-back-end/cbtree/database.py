from deta import Deta
from os import getenv
db = Deta(getenv("PROJECT_KEY")).Base("monkey")