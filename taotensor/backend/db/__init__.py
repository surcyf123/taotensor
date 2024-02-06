from peewee import SqliteDatabase
import os

# Same as above but relative to this file
DB_PATH = os.path.join(os.path.dirname(__file__), "sqlite3.db")
db = SqliteDatabase(DB_PATH)
