import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

export default function AdminHome(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token === null) {
            navigate('/admin/login');
        }
    }, []);
    return(
        <div className="admin home">
                <div className="header">
                    <h1>Welcome Home</h1>
                </div>
                <div className="body flex-column">
                    <Link to="/admin/blogManage">
                        <button className="primary">Posts Management</button>
                    </Link>
                    <Link to="/admin/lettersManage">
                        <button className="primary">Letters Management</button>
                    </Link>
                    <Link to="/admin/subscribersManage">
                        <button className="primary">Subscriber Management</button>
                    </Link>
                </div>
        </div>
    )
}