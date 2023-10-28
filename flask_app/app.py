from flask import Flask
from flask_cors import CORS
import os
from flask import Flask
from model import db, ma
from post import post
from auth import auth
from subscriber import subscriber
from letter import letter
from file import file

UPLOAD_FOLDER = './img'

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

#Login
SECRET_KEY = os.environ.get('SECRET_KEY') or 'this is a secret'
print(SECRET_KEY)
app.config['SECRET_KEY'] = SECRET_KEY

# Databse configuration                                  Username:password@hostname/databasename
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/flaskreact'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ma.init_app(app)

app.register_blueprint(post)
app.register_blueprint(auth)
app.register_blueprint(subscriber)
app.register_blueprint(letter)
app.register_blueprint(file)