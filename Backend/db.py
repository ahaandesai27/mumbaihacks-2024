import sqlite3

def get_db():
    conn = sqlite3.connect('./database.db')
    conn.execute("PRAGMA foreign_keys = 1")
    conn.row_factory = sqlite3.Row
    return conn
