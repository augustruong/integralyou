from sqlalchemy.sql import func
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

#-----------------------------------------------------Subscribers
class Subscribers(db.Model):
    __tablename__ = "subscribers"
    id = db.Column(db.Integer,primary_key=True)
    firstname = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    email = db.Column(db.String(50))
    date = db.Column(db.Date,default=func.now())
 
    def __init__(self,firstname,lastname,email):
        self.firstname=firstname
        self.lastname=lastname
        self.email=email

class SubscriberSchema(ma.Schema):
    class Meta:
        fields = ('id','firstname','lastname','email','date')

subscriber_schema = SubscriberSchema()
subscribers_schema = SubscriberSchema(many=True)

#-----------------------------------------------------Posts
class Posts(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer,primary_key=True)
    categoryId = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    title = db.Column(db.String)
    cover = db.Column(db.String)
    info = db.Column(db.String)
    description = db.Column(db.String)
    content = db.Column(db.String)
    date = db.Column(db.Date,default=func.now())
    
    def __init__(self,categoryId,title,cover,info,description,content):
        self.categoryId=categoryId
        self.title=title
        self.cover=cover
        self.info=info 
        self.description=description 
        self.content=content

class PostSchema(ma.Schema):
    class Meta:
        fields = ('id','categoryId','title','cover','info','description','content','date')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

#-----------------------------------------------------Category
class Category(db.Model):
    __tablename__ = "category"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String)

    def __init__(self,name):
        self.name=name

class CategorySchema(ma.Schema):
    class Meta:
        fields = ('id','name')

category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)

#-----------------------------------------------------Letters
class Letters(db.Model):
    __tablename__ = "letters"
    id = db.Column(db.Integer,primary_key=True)
    lastname = db.Column(db.String(50))
    firstname = db.Column(db.String(50))
    email = db.Column(db.String(50))
    phone = db.Column(db.String(15))
    title = db.Column(db.String)
    message = db.Column(db.String)
    date = db.Column(db.Date,default=func.now())
 
    def __init__(self,lastname,firstname,email,phone,title,message):
        self.firstname=firstname
        self.lastname=lastname
        self.email=email
        self.phone=phone
        self.title=title
        self.message=message

class LetterSchema(ma.Schema):
    class Meta:
        fields = ('id','lastname','firstname','email','phone','title','message','date')

letter_schema = LetterSchema()
letters_schema = LetterSchema(many=True)