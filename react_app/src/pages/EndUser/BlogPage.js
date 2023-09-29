import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import BlogItem from "../../components/BlogItem";
import './BlogPage.css'


export default function BlogPage(){
    const navigate = useNavigate();

    return(
        <div className="blog layout-1">
            <div className="p-title">ブログ</div>
            <div className="blog-list">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            
        </div>
    )
}