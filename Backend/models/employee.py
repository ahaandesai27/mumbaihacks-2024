from db import get_db

class Employee:
    @staticmethod
    def create(data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO Employees (Name, Email, Age, Password, Role, Level, PhoneNumber, CompanyID, HomeCity, TasksCompleted, TimeWorkedPerWorkweek)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (data['Name'], data['Email'], data['Age'], data['Password'], data['Role'], data['Level'], data['PhoneNumber'], data['CompanyID'], data['HomeCity'], data['TasksCompleted'], data['TimeWorkedPerWorkweek']))
            conn.commit()
            return {"id": cursor.lastrowid, "message": "Employee created"}

    @staticmethod
    def get_all():
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Employees")
        employees = cursor.fetchall()
        return [dict(emp) for emp in employees]

    @staticmethod
    def get(id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Employees WHERE ID = ?", (id,))
        employee = cursor.fetchone()
        return dict(employee) if employee else {"message": "Employee not found"}

    @staticmethod
    def update(id, data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE Employees SET Name = ?, Email = ?, Age = ?, Role = ?, Level = ?, PhoneNumber = ?, CompanyID = ?, HomeCity = ?, TasksCompleted = ?, TimeWorkedPerWorkweek = ?
                WHERE ID = ?
            ''', (data['Name'], data['Email'], data['Age'], data['Role'], data['Level'], data['PhoneNumber'], data['CompanyID'], data['HomeCity'], data['TasksCompleted'], data['TimeWorkedPerWorkweek'], id))
            conn.commit()
            return {"message": "Employee updated"}

    @staticmethod
    def delete(id):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Employees WHERE ID = ?", (id,))
            conn.commit()
            return {"message": "Employee deleted"}
