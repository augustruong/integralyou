import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

export default function MyCKEditor() {
    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
  
        axios.post('http://127.0.0.1:5000/postadd', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
          
    }
    
    return(
        <div>
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
                            setInputs(data => ({...data, ["content"]: data}));
                        }}
                    />
                    <button type="submit" name="add" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
}