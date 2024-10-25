from db import get_db
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3

class Employee:
    @staticmethod
    def register(data):
        try:
            # Set CompanyID to 1 if not provided in the input data
            company_id = data.get('CompanyID', 1)  # Default to 1 if CompanyID is not provided
            
            with get_db() as conn:
                cursor = conn.cursor()
                hashed_password = generate_password_hash(data['Password'])
                cursor.execute('''                    
                    INSERT INTO Employees (Name, Email, Age, Password, Role, Level, PhoneNumber, CompanyID, HomeCity, TasksCompleted, TimeWorkedPerWorkweek) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', 
                    (data['Name'], data['Email'], data['Age'], hashed_password, data['Role'], 1, data['PhoneNumber'], company_id, data['HomeCity'], 0, 0))  # Defaulting TasksCompleted and TimeWorkedPerWorkweek to 0
                conn.commit()
                return {
                    "id": cursor.lastrowid, "message": "Registration Successful", "status": True
                }
        except sqlite3.Error as e:
            return {
                "message": f"An error occurred: {str(e)}", "status": False
            }

        
    @staticmethod
    def login(email, password):
        try:
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Employees WHERE Email = ?", (email,))
            employee = cursor.fetchone()
            if employee and check_password_hash(employee['Password'], password):
                return {
                    "message": "Login successful",
                    "status": True,
                    "ID": employee['ID']
                }
            return {
                "message": "Invalid credentials",
                "status": False
            }
        except sqlite3.Error as e:
            return {
                "message": f"An error occurred: {str(e)}",
                "status": False
            }

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
