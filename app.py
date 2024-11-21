from flask import Flask, request, jsonify
from pipeline import pipeline

app = Flask(__name__)

@app.route("/api",methods=["POST"])
def api():

    data = request.get_json()
    response = pipeline(data)
    return response

if __name__ == "__main__":
    app.run(debug=True)