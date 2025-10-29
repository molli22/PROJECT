# protocolDB.py
import sqlite3

DB_NAME = "trackstudy.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    # טבלת משתמשים
    c.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        fullname TEXT
    )
    """)

    # טבלת ציונים
    c.execute("""
    CREATE TABLE IF NOT EXISTS grades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        subject TEXT NOT NULL,
        grade INTEGER
    )
    """)

    conn.commit()
    conn.close()

def add_user(username, password, fullname):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT INTO users (username, password, fullname) VALUES (?, ?, ?)", (username, password, fullname))
    conn.commit()
    conn.close()

def check_user(username, password):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    result = c.fetchone()
    conn.close()
    return result is not None

def get_grades(username):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT subject, grade FROM grades WHERE username=?", (username,))
    data = c.fetchall()
    conn.close()
    return [{"subject": s, "grade": g} for s, g in data]
