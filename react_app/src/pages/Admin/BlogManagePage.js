import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, NavLink} from 'react-router-dom';
import parse from 'html-react-parser'
import words from "../../words";

export default function BlogManagePage(){
    const [posts, setPosts] = useState([]);

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
     
    return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <Link to="/admin/createPost" className="btn btn-success">Upload a new post</Link>
                    <h1>List Posts</h1>
                    <div>
                        {posts.map((post) =>
                            <div>
                                {post.cover && <img src={words.api.file.get(post.cover)}/>}
                                <div>{post.title}</div>
                                {parse(post.content)}
                                <Link to={`post/${post.id}/edit`}>Edit</Link>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                    {/* <h1>List Users</h1>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date Added</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, key) =>
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date}</td>
                                    <td>
                                        <Link to={`user/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    </div>
  );
}