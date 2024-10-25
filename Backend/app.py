from flask import Flask, request, jsonify

app = Flask(__name__)

# GET request
@app.route('/get', methods=['GET'])
def get_request():
    return jsonify({"message": "This is a GET request", "params": request.args})

# POST request
@app.route('/post', methods=['POST'])
def post_request():
    data = request.get_json()
    return jsonify({"message": "This is a POST request", "data": data})

# DELETE request
@app.route('/delete', methods=['DELETE'])
def delete_request():
    return jsonify({"message": "This is a DELETE request"})

# PATCH request
@app.route('/patch', methods=['PATCH'])
def patch_request():
    data = request.get_json()
    return jsonify({"message": "This is a PATCH request", "data": data})

if __name__ == '__main__':
    app.run(debug=True)


"""

"""


"""
echo "# mumbaihacks-2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ahaandesai27/mumbaihacks-2024.git
git push -u origin main
"""