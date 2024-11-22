from flask import Flask, request, jsonify
from flask_cors import CORS
from pipeline import pipeline

app = Flask(__name__)
CORS(app)

@app.route("/api",methods=["POST"])
def api():

    data = request.get_json()
    recommender_response = pipeline(data)
    print(recommender_response)
    medications = recommender_response
    classification = "Positive"
    #classification = "Negative"
    return jsonify({
        "classification": classification,
        "medications": medications,
        "report":"The full medical report is yet to come. Please wait."
    })

if __name__ == "__main__":
    app.run(debug=True)