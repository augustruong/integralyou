import React, { useState, useRef } from "react";
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

export default function CreatePost() {
    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const [coverSrc, setCoverSrc] = useState(null);

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
            setCoverSrc(`http://127.0.0.1:5000/file-get/${fileUploaded.name}`)
            setInputs(values => ({...values, ["cover"]: fileUploaded.name}));
        })
 
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        axios.post('http://127.0.0.1:5000/postadd', inputs).then(function(response){
            console.log(response.data);
            navigate('/admin/blogManage');
        }).catch((error) => setError(error));
    }
    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    
    return(
        <div>
            {error ? <p>An error occurred: {error.message}</p> : null}
                <h2>Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <img src={coverSrc}/>
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" onChange={handleTitleChange} />
                        <button type="button" onClick={handleClick}>
                            Upload cover picture
                            <input hidden accept="image/*" multiple type="file" ref={hiddenFileInput} onChange={handleCoverChange} />
                        </button>
                        
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
                    <button type="submit" name="add">Save</button>
                </form>
        </div>
    )
}