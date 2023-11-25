import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/PostForm";
import words from "../../words";
import { removeOldImg } from "./CreatePost";

export default function EditPost(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const [validation, setValidation] = useState(false);

    
    useEffect(() => {
        getPost(id)
        setValidation(true)
    }, [id]);
  
    function getPost(id) {
        axios.get(words.api.admin.post.detail(id)).then(function(response) {
            setInputs(response.data);

        });
    }
    
    const hiddenFileInput = useRef(null);

    const handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        console.log(inputs)
        checkValidation({...inputs, [name]: value})
    }
    const handleCoverChange = event => {
        const fileUploaded = event.target.files[0];
        if(inputs.cover) axios.get(`${words.api.admin.file.remove(inputs.cover)}`).catch((error) => console.log(error))
        const body = new FormData();
        body.append("file", fileUploaded);
        fetch(`${words.api.admin.file.post}`, {
            method: "post",
            body: body
        })
        .then(response => response.json())
        .then((result) => {
            setInputs(values => ({...values, ["cover"]: result.filename}));
        })
      };

    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(words.api.admin.post.update(id), inputs).then(function(response){
            navigate('/admin/blogmanage');
        }).catch((error) => setError(error));   
    }
    const checkValidation = (inputs) => {
        if (inputs.categoryId === 3){
            if (inputs.title !== undefined && inputs.content !== undefined) setValidation(true)
            else setValidation(false)
        }
        else {
            if (inputs.title !== "" && inputs.description !== "" && inputs.content !== "" && inputs.cover !== null) setValidation(true)
            else setValidation(false)
        }
        console.log(inputs.categoryId, inputs)
    }
    return (
        <PostForm
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            validation={validation}
            categoryId={inputs.categoryId}
            hiddenFileInput={hiddenFileInput}
            handleTextChange={handleTextChange}
            handleCoverChange={handleCoverChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleRemoveOldImg={removeOldImg}
            isEdit
        />
  );
}