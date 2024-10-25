from flask import Flask, jsonify, request
from flask_cors import CORS
from models.employee import Employee
from models.tasks import Task
from models.company import Company
from models.calendar_event import CalendarEvent

app = Flask(__name__)
CORS(app)

# Calendar Routes
@app.route('/calendar/events', methods=['GET', 'POST'])
def calendar_events():
    if request.method == 'GET':
        return jsonify(CalendarEvent.get_all())
    elif request.method == 'POST':
        data = request.get_json()
        return jsonify(CalendarEvent.create(data))

@app.route('/calendar/events/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def calendar_event(id):
    if request.method == 'GET':
        event = CalendarEvent.get(id)
        return jsonify(event) if event else ('Event not found', 404)
    elif request.method == 'PUT':
        data = request.get_json()
        updated_event = CalendarEvent.update(id, data)
        return jsonify(updated_event) if updated_event else ('Event not found', 404)
    elif request.method == 'DELETE':
        deleted_event = CalendarEvent.delete(id)
        return jsonify(deleted_event) if deleted_event else ('Event not found', 404)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    return jsonify(Employee.register(data))
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("Email")
    password = data.get("Password")
    if not email or not password:
        return jsonify(
            {"message": "Email and password are required", "status": False}
        ), 400
    return jsonify(Employee.login(email, password))

# Employee Routes
@app.route('/employees', methods=['GET', 'POST'])
def employees():
    if request.method == 'GET':
        return jsonify(Employee.get_all())
    elif request.method == 'POST':
        data = request.get_json()
        return jsonify(Employee.create(data))

@app.route('/employees/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def employee(id):
    if request.method == 'GET':
        return jsonify(Employee.get(id))
    elif request.method == 'PUT':
        data = request.get_json()
        return jsonify(Employee.update(id, data))
    elif request.method == 'DELETE':
        return jsonify(Employee.delete(id))
    
# @app.route('/employees/<int:id>/tasks', methods=['GET', 'POST'])
# def employee_tasks(id):


# Task Routes
@app.route('/tasks', methods=['GET', 'POST'])
def tasks():
    if request.method == 'GET':
        return jsonify(Task.get_all())
    elif request.method == 'POST':
        data = request.get_json()
        return jsonify(Task.create(data))

@app.route('/tasks/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def task(id):
    if request.method == 'GET':
        return jsonify(Task.get(id))
    elif request.method == 'PUT':
        data = request.get_json()
        return jsonify(Task.update(id, data))
    elif request.method == 'DELETE':
        return jsonify(Task.delete(id))

@app.route('/employees/<int:id>/tasks', methods=['GET', 'POST'])
def assign_task(id):   
    if request.method == "GET":
        return jsonify(Task.get_by_employee(id))
    elif request.method == "POST":
        data = request.get_json()
        data['assigned_to'] = id
        return jsonify(Task.create(data))
    

# Company Routes
@app.route('/companies', methods=['GET', 'POST'])
def companies():
    if request.method == 'GET':
        return jsonify(Company.get_all())
    elif request.method == 'POST':
        data = request.get_json()
        return jsonify(Company.create(data))

@app.route('/companies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def company(id):
    if request.method == 'GET':
        return jsonify(Company.get(id))
    elif request.method == 'PUT':
        data = request.get_json()
        return jsonify(Company.update(id, data))
    elif request.method == 'DELETE':
        return jsonify(Company.delete(id))

if __name__ == '__main__':
    app.run(debug=True)