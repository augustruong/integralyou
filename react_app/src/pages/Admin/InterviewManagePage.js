import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function InterviewManagePage(){
    const [interviews, setInterviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getInterviews();
    }, []);
  
    function getInterviews() {
        axios.get(words.api.admin.interview.list).then(function(response) {
            setInterviews(response.data);
        });
    }
    const deleteInterview = (id) => {
        axios.delete(words.api.admin.interview.delete(id)).then(function(response){
            getInterviews();
        });
        alert("Successfully Deleted");
    }
     
    function handleUploadButton() {
        navigate('/admin/createpost')
    }
    return (
        <div className="admin interviewList">
            <div className="flex-row justify-space-btw" style={{width:"945px"}}>
                <h1>Interviews List</h1>
                <button className="primary" onClick={handleUploadButton}>
                    Upload a new interview
                </button>
            </div>
            <table class="dbTable">
                <thead>
                    <tr>
                        <th className="id">#</th>
                        <th className="cover">Cover</th>
                        <th className="title">Title/Info/Description</th>
                        <th className="date">Date Added</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {interviews.map((interview, key) =>
                        <tr key={key}>
                            <td className="id">{interview.id}</td>
                            <td className="cover">
                                {interview?.cover && <img src={words.api.admin.file.get(interview.cover)}/>}
                            </td>
                            <td className="title" style={{maxWidth:"520px"}}>
                                <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>{post.title}</span><br/>
                                {interview.description}
                            </td>
                            <td className="date">{interview.date}</td>
                            <td className="actions">
                                <Link to={`post/${post.id}/edit`}>Edit</Link>
                                <Link onClick={() => deletePost(post.id)} style={{marginLeft:"10px"}}>Delete</Link>
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
  );
}