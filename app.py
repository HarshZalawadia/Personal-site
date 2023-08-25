from flask import Flask, request, jsonify
import os
import json

app = Flask(__name__)

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files["file"]
    if file and file.filename.endswith((".csv", ".xlsx")):
        # Process the file and extract route data
        # Replace this with your data processing logic
        routes = []
        for line in file:
            parts = line.decode("utf-8").strip().split(',')
            if len(parts) == 2:
                routes.append({"road_direction": parts[0] + " - " + parts[1]})

        return jsonify({"routes": routes})

    return jsonify({"error": "Invalid file format"})

if __name__ == "__main__":
    app.run(debug=True)
