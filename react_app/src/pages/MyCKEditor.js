import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const API_URL = "http://127.0.0.1:5000";
const UPLOAD_ENDPOINT = "file-upload";
const GETFILE_ENDPOINT = "file-get";

function uploadAdapter(loader) {
    return {
    upload: () => {
        return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
            body.append("file", file);
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

export default function MyCKEditor() {
    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputs(values => ({...values, ["title"]: value}));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:5000/postadd', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        }).catch((error) => setError(error));
    }
    
    return(
        <div>
            {error ? <p>An error occurred: {error.message}</p> : null}
            <div className="App">
                <h2>Using CKEditor 5</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" onChange={handleChange} />
                    </div>
                    <CKEditor
                        editor={ Editor }
                        name="content"
                        onChange={(event,editor) => {
                            const data = editor.getData();
                            console.log({event,editor,data});
                            setInputs(values => ({...values, ["content"]: data}));
                        }}
                        config={{
                            extraPlugins: [uploadPlugin]
                          }}
                    />
                    <button type="submit" name="add" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
}