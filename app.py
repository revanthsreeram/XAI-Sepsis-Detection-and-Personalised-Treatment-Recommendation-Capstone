from flask import Flask, request, jsonify
from flask_cors import CORS
from pipeline import pipeline

app = Flask(__name__)
CORS(app)

@app.route("/api",methods=["POST"])
def api():

    data = request.get_json()
    classification_label, medication_list, report = pipeline(data)

    return jsonify({
        "classification": classification_label,
        "medications": medication_list,
        "report":report
    })

if __name__ == "__main__":
    app.run(debug=True)