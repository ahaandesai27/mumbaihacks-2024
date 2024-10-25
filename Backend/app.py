from flask import Flask, jsonify, request
from models.employee import Employee
from models.tasks import Task
from models.company import Company

app = Flask(__name__)

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
