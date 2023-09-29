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
        <div>
        <div className="container h-100">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Welcome Home</h1>
                </div>
                <div className="col-2">
                    <Link to="/admin/blogmanage">Blog Management</Link>

                </div>
            </div>
        </div>
    </div>
    )
}