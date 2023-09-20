from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow #ModuleNotFoundError: No module named 'flask_marshmallow' = pip install flask-marshmallow https://pypi.org/project/flask-marshmallow/
from flask_cors import CORS #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors

app = Flask(__name__)
CORS(app)

#Add ckeditor

# Databse configuration                                  Username:password@hostname/databasename
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/flaskreact'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)

ma=Marshmallow(app)

#-----------------------------------------------------Users
class Users(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    date = db.Column(db.DateTime,default=datetime.datetime.now)
 
    def __init__(self,name,email):
        self.name=name
        self.email=email

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id','name','email','date')
 
user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route("/")
def hello_world():
    return "<p>Hello, World</p>"

#--------------------------------------------------CRUD Users
@app.route('/listusers',methods =['GET'])
def listusers():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)
 
@app.route('/userdetails/<id>',methods =['GET'])
def userdetails(id):
    user = Users.query.get(id)
    return user_schema.jsonify(user)

@app.route('/userupdate/<id>',methods = ['PUT'])
def userupdate(id):
    user = Users.query.get(id)
 
    name = request.json['name']
    email = request.json['email']
 
    user.name = name
    user.email = email
 
    db.session.commit()
    return user_schema.jsonify(user)
    
@app.route('/userdelete/<id>',methods=['DELETE'])
def userdelete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/useradd',methods=['POST'])
def useradd():
    name = request.json['name']
    email = request.json['email']

    users = Users(name,email)
    db.session.add(users)
    db.session.commit()

    return user_schema.jsonify(users)

#-----------------------------------------------------Posts
class Posts(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String)
    content = db.Column(db.String)
    date = db.Column(db.DateTime,default=datetime.datetime.now)
 
    def __init__(self,title,content):
        self.title=title
        self.content=content

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id','title','content','date')
 
post_schema = PostSchema()
posts_schema = PostSchema(many=True)

#--------------------------------------------------CRUD Posts
@app.route('/listposts',methods =['GET'])
def listposts():
    all_posts = Posts.query.all()
    results = posts_schema.dump(all_posts)
    return jsonify(results)
 
@app.route('/postdetails/<id>',methods =['GET'])
def postdetails(id):
    post = Posts.query.get(id)
    return post_schema.jsonify(post)

@app.route('/postupdate/<id>',methods = ['PUT'])
def postupdate(id):
    post = Posts.query.get(id)
 
    title = request.json['title']
    content = request.json['content']
 
    post.title = title
    post.content = content
 
    db.session.commit()
    return post_schema.jsonify(post)
    
@app.route('/postdelete/<id>',methods=['DELETE'])
def postdelete(id):
    post = Posts.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return post_schema.jsonify(post)

@app.route('/postadd',methods=['POST'])
def postadd():
    title = request.json['title']
    content = request.json['content']

    posts = Posts(title,content)
    db.session.add(posts)
    db.session.commit()

    return post_schema.jsonify(posts)