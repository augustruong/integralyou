from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow #ModuleNotFoundError: No module named 'flask_marshmallow' = pip install flask-marshmallow https://pypi.org/project/flask-marshmallow/
from flask_cors import CORS #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
import os
from flask import Flask, flash, request, redirect, url_for, send_from_directory, send_file
from werkzeug.utils import secure_filename
import jwt
from werkzeug.security import check_password_hash
from validate import validate_username_and_password

UPLOAD_FOLDER = './img'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

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
db=SQLAlchemy(app)

ma=Marshmallow(app)

#-----------------------------------------------------Admin
class Admin(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(255))
 
    def __init__(self,username,password):
        self.username=username
        self.password=password

class AdminSchema(ma.Schema):
    class Meta:
        fields = ('id','username','password')
 
admin_schema = AdminSchema()
admin_schema = AdminSchema(many=True)

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

#-------------------------------------------------- UPLOAD,GET FILE
def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/file-upload', methods=['POST'])
def upload_file():
	# check if the post request has the file part
	if 'file' not in request.files:
		resp = jsonify({'message' : 'No file part in the request'})
		resp.status_code = 400
		return resp
	file = request.files['file']
	if file.filename == '':
		resp = jsonify({'message' : 'No file selected for uploading'})
		resp.status_code = 400
		return resp
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		resp = jsonify({'message' : 'File successfully uploaded', 'filename': filename})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
		resp.status_code = 400
		return resp
     
@app.route('/file-get/<filename>', methods=['GET'])
def get_file(filename):
    try:
        return send_file(app.config['UPLOAD_FOLDER'] + "/" + filename)
    except FileNotFoundError:
        resp = jsonify({'message' : 'File not found'})
        resp.status_code = 404
        return resp


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
    cover = db.Column(db.String)
 
    def __init__(self,title,cover,content):
        self.title=title
        self.cover=cover
        self.content=content

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id','title','cover','content','date')
 
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
    cover = request.json['cover']
    content = request.json['content']

    post.title = title
    post.cover = cover
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
    cover = request.json['cover']
    content = request.json['content']
    date = request.json['date']

    posts = Posts(title,cover,content,date)
    db.session.add(posts)
    db.session.commit()

    return post_schema.jsonify(posts)

#------------------------------------------------------------------------------------------Login
@app.route("/admin/login", methods=["POST"])
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
                    app.config["SECRET_KEY"],
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