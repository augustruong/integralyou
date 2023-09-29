import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link, NavLink} from 'react-router-dom';
import parse from 'html-react-parser'

export default function BlogManagePage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
  
    function getPosts() {
        axios.get('http://127.0.0.1:5000/listposts').then(function(response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }
    // const deleteUser = (id) => {
    //     axios.delete(`http://127.0.0.1:5000/userdelete/${id}`).then(function(response){
    //         console.log(response.data);
    //         getUsers();
    //     });
    //     alert("Successfully Deleted");
    // }
     
    return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <Link to="/editor" className="btn btn-success">Upload a new post</Link>
                    <h1>List Posts</h1>
                    <div>
                        {posts.map((post) =>
                            <div>
                                <div>{post.cover}</div>
                                <div>{post.title}</div>
                                {parse(post.content)}

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