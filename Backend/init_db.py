import sqlite3

def initialize_db():
    with sqlite3.connect('./database.db') as conn:
        with open(r'C:\Users\Vansh_Prac\MUMBAI_HACKS\mumbaihacks-2024\Backend\schema.sql', 'r') as f:
            conn.executescript(f.read())
        print("Database initialized with required tables.")

if __name__ == '__main__':
    initialize_db()
