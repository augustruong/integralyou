import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/PostForm";
import words from "../../words";

const getCkeditorImg = (data) => 
    Array.from( new DOMParser().parseFromString(data, 'text/html' )
        .querySelectorAll( 'img' ) )
        .map( img => img.getAttribute( 'src' ) )

export const removeOldImg = (oldData, newData) => {
    const oldImg = getCkeditorImg(oldData)
    const newImg = getCkeditorImg(newData)
    if(JSON.stringify(oldImg) !== JSON.stringify(newImg))
        oldImg.map((img) => {
            if(!img) return
            const fileName = img.split("/")[img.split("/").length - 1]

            axios.get(`${words.api.admin.file.remove(fileName)}`).catch((error) => console.log(error))
        })   
}

export default function CreatePost() {
    const navigate = useNavigate();
    const {category} = useParams();

    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const [validation, setValidation] = useState(false);
    const [categoryId, setCategoryId] = useState();

    useEffect(() => {
        if (category === 'Blog') { setInputs(values => ({...values, categoryId: 1})); setCategoryId(1) }
        else if (category === 'Interview') { setInputs(values => ({...values, categoryId: 2})); setCategoryId(2) }
        else { setInputs(values => ({...values, categoryId: 3})); setCategoryId(3) }

        checkValidation(categoryId,inputs)

    }, []);
    
    const hiddenFileInput = useRef(null);

    const checkValidation = (categoryId,inputs) => {
        if (categoryId === 3){
            if (inputs.title !== undefined && inputs.content !== undefined) setValidation(true)
            else setValidation(false)
        }
        else {
            if (inputs.title !== undefined && inputs.description !== undefined && inputs.content !== undefined && inputs.cover !== null) setValidation(true)
            else setValidation(false)
        }
    }

    const handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        checkValidation(categoryId,inputs)
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
            checkValidation(categoryId,inputs)
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
        <PostForm
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            validation={validation}
            categoryId={categoryId}
            hiddenFileInput={hiddenFileInput}
            handleTextChange={handleTextChange}
            handleCoverChange={handleCoverChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleRemoveOldImg={removeOldImg}
            isBlog
        />
    )
}