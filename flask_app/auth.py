from flask import (
    Blueprint, request, current_app
)
from model import Admin
import jwt
from werkzeug.security import check_password_hash
from validate import validate_username_and_password

auth = Blueprint('auth', __name__)

@auth.route("/admin/login", methods=["POST"])
def login():
    try:
        data = request.json
        if not data:
            return {
                "message": "Please provide user details",
                "data": None,
                "error": "Bad request"
            }, 400
        # validate input
        is_validated = validate_username_and_password(data.get('username'), data.get('password'))
        if is_validated is not True:
            return dict(message='Invalid data', data=None, error=is_validated), 400
        
        admin = Admin.query.filter_by(username=request.json['username']).first() # tìm user bằng tên username

        if admin and check_password_hash(admin.password, request.json['password']):
            try:
                # token should expire after 24 hrs
                token = jwt.encode(
                    {"id": admin.id},
                    current_app.config["SECRET_KEY"],
                    algorithm="HS256"
                )
                return {
                    "message": "Successfully fetched auth token",
                    "username": admin.username,
                    "token": token
                }
            except Exception as e:
                return {
                    "error": "Something went wrong",
                    "message": str(e)
                }, 500
        return {
            "message": "Error fetching auth token!, invalid email or password",
            "data": None,
            "error": "Unauthorized"
        }, 404
    except Exception as e:
        return {
                "message": "Something went wrong!",
                "error": str(e),
                "data": None
        }, 500