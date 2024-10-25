from db import get_db

class Task:
    @staticmethod
    def create(data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO Tasks (title, description, assigned_to, created_by, status, deadline)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (data['title'], data['description'], data['assigned_to'], data['created_by'], data['status'], data['deadline']))
            conn.commit()
            return {"id": cursor.lastrowid, "message": "Task created"}

    @staticmethod
    def get_all():
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Tasks")
        tasks = cursor.fetchall()
        return [dict(task) for task in tasks]

    @staticmethod
    def get(id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Tasks WHERE task_id = ?", (id,))
        task = cursor.fetchone()
        return dict(task) if task else {"message": "Task not found"}

    @staticmethod
    def get_by_employee(employee_id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Tasks WHERE assigned_to = ?", (employee_id,))
        tasks = cursor.fetchall()
        return [dict(task) for task in tasks]
    
    @staticmethod
    def update(id, data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE Tasks SET title = ?, description = ?, assigned_to = ?, created_by = ?, status = ?, deadline = ?
                WHERE task_id = ?
            ''', (data['title'], data['description'], data['assigned_to'], data['created_by'], data['status'], data['deadline'], id))
            conn.commit()
            return {"message": "Task updated"}

    @staticmethod
    def delete(id):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Tasks WHERE task_id = ?", (id,))
            conn.commit()
            return {"message": "Task deleted"}