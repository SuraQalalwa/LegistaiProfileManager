import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from database import db, init_db  
from models import User
from flask_cors import CORS


load_dotenv()

DATABASE_URL = os.getenv("DATA_BASE_URL")

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = (DATABASE_URL)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 
init_db(app)

with app.app_context():
    db.create_all()

@app.route("/", methods=["GET"])
def home():
    return "Hello to legistai"

@app.route("/register", methods=["POST"])
def register_user():
    data = request.json
    new_user = User(
        name=data.get("name"),
        location=data.get("location"),
        phone_number=data.get("phone_number"),
        email=data.get("email"),
        description=data.get("description"),
        rating=data.get("rating"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"userID": new_user.id}), 201

@app.route("/profile/<int:user_id>", methods=["GET"])
def get_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify({
        "id": user.id,
        "name": user.name,
        "location": user.location,
        "phone_number": user.phone_number,
        "email": user.email,
        "description": user.description,
        "rating": user.rating
    })

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{
        "id": user.id,
        "name": user.name,
        "location": user.location,
        "phone_number": user.phone_number,
        "email": user.email,
        "description": user.description,
        "rating": user.rating
    } for user in users]), 200


if __name__ == "__main__":
    app.run(debug=True)
