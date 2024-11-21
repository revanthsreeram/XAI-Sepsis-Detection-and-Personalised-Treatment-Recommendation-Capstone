from flask import Flask, request, jsonify
from flask_cors import CORS
from pipeline import pipeline

app = Flask(__name__)
CORS(app)

@app.route("/api",methods=["POST"])
def api():

    data = request.get_json()
    response = pipeline(data)
    print(response)
    return jsonify({"message": f"The list of medicines are {response}"})

if __name__ == "__main__":
    app.run(debug=True)