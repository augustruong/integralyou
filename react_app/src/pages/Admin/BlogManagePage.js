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
     
    function handleUploadButton() { navigate('/admin/createpost') }
    
    return (
        <div className="admin blogList">
            <div className="header">
                <a href="/admin/home">Back to Home</a>
                <div className="flex-row justify-space-btw">
                    <h1>Posts List</h1>
                    <button className="primary" onClick={handleUploadButton}>
                        Upload a new post
                    </button>
                </div>
            </div>
            <div className="news">
                <h2>News</h2>
                <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="title">Title</th>
                            <th className="content">Content</th>
                            <th className="date">Date Added</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {posts.filter(item => item.categoryId === 3).map((post, key) =>
                            <tr key={key}>
                                <td className="title" style={{maxWidth:"520px"}}>
                                    <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>{post.title}</span>
                                </td>
                                <td className="content">{parse(post.content)}</td>
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
            <div className="interview">
                <h2>Interview</h2>
                <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="cover">Cover</th>
                            <th className="title">Title/Info/Description</th>
                            <th className="date">Date Added</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {posts.filter(item => item.categoryId === 2).map((post, key) =>
                            <tr key={key}>
                                <td className="cover">
                                    {post?.cover && <img src={words.api.admin.file.get(post.cover)}/>}
                                </td>
                                <td className="title" style={{maxWidth:"520px"}}>
                                    <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>{post.title}</span><br/>
                                    {post.info}<br/>
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
            <div className="blog">
                <h2>Blog</h2>
                <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="cover">Cover</th>
                            <th className="title">Title/Description</th>
                            <th className="date">Date Added</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {posts.filter(item => item.categoryId === 1).map((post, key) =>
                            <tr key={key}>
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
            
        </div>
  );
}