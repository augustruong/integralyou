from flask import (
    Blueprint, request, jsonify
)
from model import Category, category_schema, categories_schema, db

category = Blueprint('category', __name__)

@category.route('/categories',methods =['GET'])
def categories():
    all_categories = Category.query.all()
    results = categories_schema.dump(all_categories)
    return jsonify(results)

