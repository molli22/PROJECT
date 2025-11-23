# protocolDB.py
import sqlite3

DB_NAME = "trackstudy.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    conn.execute("PRAGMA foreign_keys = ON")
    c = conn.cursor()

    # USERS TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL
    )
    """)

    # STUDENTS TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS students (
        user_id INTEGER PRIMARY KEY,
        class TEXT NOT NULL,      
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
    """)

    # TEACHERS TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS teachers (
        user_id INTEGER PRIMARY KEY,
        subject_id INTEGER NOT NULL,
        phone TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
    """)

    # SUBJECTS TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject_name TEXT UNIQUE NOT NULL
    )
    """)

    # SCHEDULE TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_number INTEGER NOT NULL,
        class TEXT NOT NULL, 
        room TEXT NOT NULL,        
        subject_id INTEGER NOT NULL,
        teacher_id INTEGER NOT NULL,
        day TEXT NOT NULL,             
        FOREIGN KEY (subject_id) REFERENCES subjects(id),
        FOREIGN KEY (teacher_id) REFERENCES users(id)
    )
    """)

    # GRADES TABLE
    c.execute("""
    CREATE TABLE IF NOT EXISTS grades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        teacher_id INTEGER  NOT NULL,
        student_id INTEGER  NOT NULL,
        subject_id INTEGER  NOT NULL,
        grade_value INTEGER,
        FOREIGN KEY (student_id) REFERENCES users(id),
        FOREIGN KEY (teacher_id) REFERENCES users(id),
        FOREIGN KEY (subject_id) REFERENCES subjects(id)
    )
    """)

    conn.commit()
    conn.close()
    #-----------------------------------------------------------------------

   

def add_user(name, surname, email, password, role):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        INSERT INTO users (name, surname, email, password, role)
        VALUES (?, ?, ?, ?, ?)
    """, (name, surname, email, password, role))
    conn.commit()
    conn.close()

def check_user(email, password):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        SELECT * FROM users
        WHERE email=? AND password=?
    """, (email, password))
    result = c.fetchone()
    conn.close()
    return result

def get_grades(student_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        SELECT subjects.subject_name, grades.grade_value
        FROM grades
        JOIN subjects ON grades.subject_id = subjects.id
        WHERE grades.student_id=?
    """, (student_id,))
    rows = c.fetchall()
    conn.close()

    return [{"subject": r[0], "grade": r[1]} for r in rows]


def get_working_days(teacher_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        SELECT day FROM schedule
        WHERE teacher_id=?
        GROUP BY day
    """, (teacher_id,))
    rows = c.fetchall()
    conn.close()

    return [r[0] for r in rows]







# def get_grades(username):
#     conn = sqlite3.connect(DB_NAME)
#     c = conn.cursor()
#     c.execute("SELECT subject, grade FROM grades WHERE username=?", (username,))
#     data = c.fetchall()
#     conn.close()
#     return [{"subject": s, "grade": g} for s, g in data]
