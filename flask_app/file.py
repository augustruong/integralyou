from flask import (
    Blueprint, request, jsonify, send_file, current_app
)
from werkzeug.utils import secure_filename
import os

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

file = Blueprint('file', __name__)
def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@file.route('/file-upload', methods=['POST'])
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
		file.save(os.path.join(current_app.config['UPLOAD_FOLDER'], filename))
		resp = jsonify({'message' : 'File successfully uploaded', 'filename': filename})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
		resp.status_code = 400
		return resp
     
@file.route('/file-get/<filename>', methods=['GET'])
def get_file(filename):
    try:
        return send_file(current_app.config['UPLOAD_FOLDER'] + "/" + filename)
    except FileNotFoundError:
        resp = jsonify({'message' : 'File not found'})
        resp.status_code = 404
        return resp
