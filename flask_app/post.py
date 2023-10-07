from flask import (
    Blueprint, request, jsonify
)
from model import Posts, post_schema, posts_schema, db

post = Blueprint('post', __name__)

@post.route('/listposts',methods =['GET'])
def listposts():
    all_posts = Posts.query.all()
    results = posts_schema.dump(all_posts)
    return jsonify(results)

@post.route('/postdetails/<id>',methods =['GET'])
def postdetails(id):
    post = Posts.query.get(id)
    return post_schema.jsonify(post)

@post.route('/postupdate/<id>',methods = ['PUT'])
def postupdate(id):
    post = Posts.query.get(id)
 
    title = request.json['title']
    cover = request.json['cover']
    description = request.json['description']
    content = request.json['content']

    post.title = title
    post.cover = cover
    post.description = description
    post.content = content
 
    db.session.commit()
    return post_schema.jsonify(post)
    
@post.route('/postdelete/<id>',methods=['DELETE'])
def postdelete(id):
    post = Posts.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return post_schema.jsonify(post)

@post.route('/postadd',methods=['POST'])
def postadd():
    title = request.json['title']
    cover = request.json['cover']
    description = request.json['description']
    content = request.json['content']

    posts = Posts(title,cover,description,content)
    db.session.add(posts)
    db.session.commit()

    return post_schema.jsonify(posts)