from flask import (
    Blueprint, request, jsonify
)
from model import Users, user_schema, users_schema, db

user = Blueprint('user', __name__)

@user.route('/listusers',methods =['GET'])
def listusers():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)
 
@user.route('/userdetails/<id>',methods =['GET'])
def userdetails(id):
    user = Users.query.get(id)
    return user_schema.jsonify(user)

@user.route('/userupdate/<id>',methods = ['PUT'])
def userupdate(id):
    user = Users.query.get(id)
 
    name = request.json['name']
    email = request.json['email']
 
    user.name = name
    user.email = email
 
    db.session.commit()
    return user_schema.jsonify(user)
    
@user.route('/userdelete/<id>',methods=['DELETE'])
def userdelete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)

@user.route('/useradd',methods=['POST'])
def useradd():
    name = request.json['name']
    email = request.json['email']

    users = Users(name,email)
    db.session.add(users)
    db.session.commit()

    return user_schema.jsonify(users)
