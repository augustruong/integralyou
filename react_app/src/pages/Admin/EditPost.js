import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import words from "../../words";

const API_URL = process.env.REACT_APP_API_END_POINT;
const UPLOAD_ENDPOINT = "file-upload";
const GETFILE_ENDPOINT = "file-get";

function uploadAdapter(loader) {
    return {
    upload: () => {
        return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
            body.append("file", file);
            console.log(file)
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            method: "post",
            body: body
            // mode: "no-cors"
            })
            .then((res) => res.json())
            .then((res) => {
                resolve({
                default: `${API_URL}/${GETFILE_ENDPOINT}/${res.filename}`
                });
            })
            .catch((err) => {
                reject(err);
            });
        });
        });
    }
    };
}

function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
}

export default function EditPost(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
    // const [coverSrc, setCoverSrc] = useState(null);
  
    useEffect(() => {
        getPost(id);
    }, [id]);
  
    function getPost(id) {
        axios.get(words.api.admin.post.detail(id)).then(function(response) {
            console.log(response.data)
            setInputs(response.data);
        });
    }
  
    const hiddenFileInput = useRef(null);

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setInputs(values => ({...values, ["title"]: value}));
    }
    const handleCoverChange = event => {
        const fileUploaded = event.target.files[0];
        const body = new FormData();
        body.append("file", fileUploaded);
        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            method: "post",
            body: body
        }).then(() => {
            setInputs(values => ({...values, ["cover"]: fileUploaded.name}));
        })
      };

    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(words.api.admin.post.update(id), inputs).then(function(response){
            navigate('/admin/blogmanage');
        });   
    }
     
    return (
    <div>
        <div className="container h-100">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <h2>Edit Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <img src={words.api.file.get(inputs.cover)}/>
                        <label>Title</label>
                        <input type="text" value={inputs.title} className="form-control" name="title" onChange={handleTitleChange} />
                        <button type="button" onClick={handleClick}>
                            Upload cover picture
                            <input hidden accept="image/*" multiple type="file" ref={hiddenFileInput} onChange={handleCoverChange} />
                        </button>
                        
                    </div>
                    <CKEditor
                        editor={ Editor }
                        name="content"
                        data={inputs.content}
                        onChange={(event,editor) => {
                            const data = editor.getData();
                            console.log({event,editor,data});
                            setInputs(values => ({...values, ["content"]: data}));
                        }}
                        config={{
                            extraPlugins: [uploadPlugin]
                          }}
                    />
                    <button type="submit" name="add">Save</button>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
        </div>
    </div>
  );
}