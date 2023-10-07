import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function BlogManagePage(){
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }
    const deletePost = (id) => {
        axios.delete(words.api.admin.post.delete(id)).then(function(response){
            getPosts();
        });
        alert("Successfully Deleted");
    }
     
    function handleUploadButton() {
        navigate('/admin/createpost')
    }
    return (
        <div className="admin blogList">
            <div className="flex-row justify-space-btw" style={{width:"945px"}}>
                <h1>Posts List</h1>
                <button className="primary" onClick={handleUploadButton}>
                    Upload a new post
                </button>
            </div>
                    {/* <div>
                        {posts.map((post) =>
                            <div>
                                {post?.cover && <img src={words.api.admin.file.get(post.cover)}/>}
                                <div>{post.title}</div>
                                <div>{post.description}</div>
                                {parse(post.content)}
                                <Link to={`post/${post.id}/edit`}>Edit</Link>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                     */}
            <table class="dbTable">
                <thead>
                    <tr>
                        <th className="id">#</th>
                        <th className="cover">Cover</th>
                        <th className="title">Title/Description</th>
                        <th className="date">Date Added</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {posts.map((post, key) =>
                        <tr key={key}>
                            <td className="id">{post.id}</td>
                            <td className="cover">
                                {post?.cover && <img src={words.api.admin.file.get(post.cover)}/>}
                            </td>
                            <td className="title" style={{maxWidth:"520px"}}>
                                <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>{post.title}</span><br/>
                                {post.description}
                            </td>
                            <td className="date">{post.date}</td>
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