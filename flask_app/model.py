import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db=SQLAlchemy()
ma=Marshmallow()

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
admins_schema = AdminSchema(many=True)

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

#-----------------------------------------------------Posts
class Posts(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String)
    content = db.Column(db.String)
    date = db.Column(db.DateTime,default=datetime.datetime.now)
    cover = db.Column(db.String)
    description = db.Column(db.String)
 
    def __init__(self,title,cover,description,content):
        self.title=title
        self.cover=cover
        self.description=description 
        self.content=content

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id','title','cover','description','content','date')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
 