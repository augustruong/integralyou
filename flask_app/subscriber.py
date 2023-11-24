from flask import (
    Blueprint, request, jsonify, abort
)
from model import Subscribers, subscriber_schema, subscribers_schema, db

subscriber = Blueprint('subscriber', __name__)

@subscriber.route('/listsubscribers',methods =['GET'])
def listsubscribers():
    all_subscribers = Subscribers.query.all()
    results = subscribers_schema.dump(all_subscribers)
    return jsonify(results)

@subscriber.route('/subscriberadd',methods=['POST'])
def subscriberadd():
    # abort(400, 'Record not found')
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    email = request.json['email']

    subscribers = Subscribers(firstname,lastname,email)
    db.session.add(subscribers)
    db.session.commit()

    return subscriber_schema.jsonify(subscribers)


   