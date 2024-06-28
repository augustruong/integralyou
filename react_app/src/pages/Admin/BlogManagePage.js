import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, useNavigate} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function BlogManagePage(){
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState(words.post.category.blog)
    const [showPopUp,setShowPopUp] = useState(false);

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
    function toggleShowPopUp() {
        setShowPopUp(!showPopUp)
    }
     
    return (
        <div className="admin blogList">
            <div className="header">
                <a href="/admin/home">Back to Home</a>
                <div className="flex-row justify-space-btw">
                    <h1>Posts List</h1>
                    <button className="primary" onClick={() => toggleShowPopUp()}>
                        Upload a new post
                    </button>
                </div>
            </div>
            <div className="category-group mt-base">
                <button className={selected===words.post.category.blog ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.blog)}>{words.post.category.blog}</button>
                <button className={selected===words.post.category.interview ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.interview)}>{words.post.category.interview}</button>
                <button className={selected===words.post.category.news ? 'selected mr-base' : 'mr-base'} onClick={() => setSelected(words.post.category.news)}>{words.post.category.news}</button>
            </div>
            <div>
                {selected === words.post.category.news &&
                    <div className="news pt-xl">
                        <h2>{words.post.category.news}</h2>
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
                                            <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                                <Link to={`/news`} target="_blank">
                                                    {post.title}
                                                </Link>
                                            </span>
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
                }
                {selected === words.post.category.interview &&
                <div className="interview pt-xl">
                    <h2>{words.post.category.interview}</h2>
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
                                {posts.filter(item => item.categoryId === 2).map((post, key) =>
                                <tr key={key}>
                                    <td className="cover">
                                        {post?.cover && <img src={words.api.admin.file.get(post.cover)}/>}
                                    </td>
                                    <td className="title" style={{maxWidth:"520px"}}>
                                        <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                            <Link to={`/interview/${post.id}`} target="_blank">
                                                {post.title}
                                            </Link>
                                        </span>
                                        <br/>
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
                }
                {selected === words.post.category.blog &&
                <div className="blog pt-xl">
                    <h2>{words.post.category.blog}</h2>
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
                                        <span className="bold" style={{marginBottom:"10px", display:"inline-block"}}>
                                            <Link to={`/blog/${post.id}`} target="_blank">
                                            {post.title}
                                            </Link>
                                        </span>
                                        <br/>
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
                }
            </div>
            {showPopUp &&
                <div className="overlay">
                    <div className="popup">
                        <h2>Choose category</h2>
                        <a className="close" onClick={() => setShowPopUp(!showPopUp)}>&times;</a>
                        <div className="selection mt-base">
                            <Link to={`/admin/createpost/Blog`} >
                                <button className="w-100pc mt-base">{words.post.category.blog}</button>
                            </Link>
                            <Link to={`/admin/createpost/Interview`} >
                                <button className="w-100pc mt-base">{words.post.category.interview}</button>
                            </Link>
                            <Link to={`/admin/createpost/News`} >
                                <button className="w-100pc mt-base">{words.post.category.news}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
  );
}