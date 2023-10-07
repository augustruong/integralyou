import React, { useState, useRef,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import words from "../../words";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default function CreatePost() {
    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const [coverSrc, setCoverSrc] = useState(null);

    const hiddenFileInput = useRef(null);

    const handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleCoverChange = event => {
        const fileUploaded = event.target.files[0];
        const body = new FormData();
        body.append("file", fileUploaded);
        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            method: "post",
            body: body
        }).then(() => {
            setCoverSrc(words.api.admin.file.get(fileUploaded.name))
            setInputs(values => ({...values, ["cover"]: fileUploaded.name}));
        })
 
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        axios.post(words.api.admin.post.add, inputs).then(function(response){
            console.log(response.data);
            navigate('/admin/blogManage');
        }).catch((error) => setError(error));
    }
    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    
    return(
        <div className="admin createNewPost">
            {error ? <p>An error occurred: {error.message}</p> : null}
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                <div style={{marginBottom:"var(--space-s)"}}>
                    <Link to={`/admin/blogmanage`} >＜ Back to List</Link>
                </div>
                <h2 style={{marginBottom:"var(--space-xl)"}}>Create New Post</h2>
                <form onSubmit={handleSubmit} className="flex-row gap-xl">
                    <div>
                        <div className="thumbnail"><img src={coverSrc}/></div>
                        <button type="button" onClick={handleClick} style={{marginTop:"var(--space-s)"}}>
                            Upload cover picture
                            <input hidden accept="image/*" multiple type="file" ref={hiddenFileInput} onChange={handleCoverChange} />
                        </button>
                    </div>
                    <div style={{width:"676px"}}>
                        <div>
                            <label style={{display:"inline-block",width:"100px"}}>Title</label>
                            <input type="text" name="title" onChange={handleTextChange} style={{width:"calc(100% - 100px)",marginBottom:"var(--space-s)"}}/>
                        </div>
                        <div>
                            <label style={{display:"inline-block",width:"100px"}}>Description</label>
                            <input type="text" name="description" onChange={handleTextChange} style={{width:"calc(100% - 100px)",marginBottom:"var(--space-s)"}}/>
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
                    <button type="submit" className="primary" name="add" style={{marginTop:"var(--space-base)"}}>Save</button>
                    </div>
                </form>
        </div>
    )
}