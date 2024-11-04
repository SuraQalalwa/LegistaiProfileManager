from database import db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    location = db.Column(db.String, nullable = False)
    phone_number = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)
    rating = db.Column(db.String, nullable = False)
