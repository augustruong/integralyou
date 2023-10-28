from flask import (
    Blueprint, request, jsonify
)
from model import Letters, letter_schema, letters_schema, db

letter = Blueprint('letter', __name__)

@letter.route('/listletters',methods =['GET'])
def listletters():
    all_letters = Letters.query.all()
    results = letters_schema.dump(all_letters)
    return jsonify(results)

@letter.route('/letteradd',methods=['POST'])
def letteradd():
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    email = request.json['email']
    phone = request.json['phone']
    subject = request.json['subject']
    message = request.json['message']

    letters = Letters(firstname,lastname,email,phone,subject,message)
    db.session.add(letters)
    db.session.commit()

    return letter_schema.jsonify(letters)
