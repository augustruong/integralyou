import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser'
import words from "../../words";

import BlogItem from "../../components/BlogItem";
import './BlogPage.css'


export default function BlogPage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }

    return(
        <div className="blog layout-1">
            <div className="p-title">ブログ</div>
            <div className="blog-list">
            {posts.sort((a, b) => a.date < b.date ? 1 : -1).slice(0,3).map((post) =>
                <BlogItem title={post.title} cover={post.cover} description={post.description} date={post.date}/>
            )}
            </div>
            
        </div>
    )
}