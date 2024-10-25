from db import get_db

class Company:
    @staticmethod
    def create(data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO Companies (CompanyName, AmountOfEmployeesWorkingFromHome, HQ, TasksInStore, Domain)
                VALUES (?, ?, ?, ?, ?)
            ''', (data['CompanyName'], data['AmountOfEmployeesWorkingFromHome'], data['HQ'], data['TasksInStore'], data['Domain']))
            conn.commit()
            return {"id": cursor.lastrowid, "message": "Company created"}

    @staticmethod
    def get_all():
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Companies")
        companies = cursor.fetchall()
        return [dict(company) for company in companies]

    @staticmethod
    def get(id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Companies WHERE ID = ?", (id,))
        company = cursor.fetchone()
        return dict(company) if company else {"message": "Company not found"}

    @staticmethod
    def update(id, data):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE Companies SET CompanyName = ?, AmountOfEmployeesWorkingFromHome = ?, HQ = ?, TasksInStore = ?, Domain = ?
                WHERE ID = ?
            ''', (data['CompanyName'], data['AmountOfEmployeesWorkingFromHome'], data['HQ'], data['TasksInStore'], data['Domain'], id))
            conn.commit()
            return {"message": "Company updated"}

    @staticmethod
    def delete(id):
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Companies WHERE ID = ?", (id,))
            conn.commit()
            return {"message": "Company deleted"}
