from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Do not watch the clock. Do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Everything you can imagine is real.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
]

@app.route("/api/quote")
def quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)