from flask import (
    Blueprint, request, jsonify
)
from model import Posts, post_schema, posts_schema, db
from file import remove_file

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
    info = request.json['info']
    cover = request.json['cover']
    description = request.json['description']
    content = request.json['content']
    categoryId = request.json['categoryId']

    post.title = title
    post.cover = cover
    post.description = description
    post.content = content
    post.categoryId = categoryId

    db.session.commit()
    return post_schema.jsonify(post)
    
@post.route('/postdelete/<id>',methods=['DELETE'])
def postdelete(id):
    post = Posts.query.get(id)
    remove_file(post.cover)
    db.session.delete(post)
    db.session.commit()
    return post_schema.jsonify(post)

@post.route('/postadd',methods=['POST'])
def postadd():
    categoryId = request.json['categoryId']
    title = request.json['title']
    cover = request.json['cover'] if 'cover' in request.json else None
    info = request.json['info'] if 'info' in request.json else None
    description = request.json['description']
    content = request.json['content']

    posts = Posts(categoryId,title,cover,info,description,content)
    db.session.add(posts)
    db.session.commit()

    return post_schema.jsonify(posts)