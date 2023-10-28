import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import words from "../../words";

import BlogItem from "../../components/BlogItem";
import './InterviewPage.css'


export default function InterviewPage(){
    const navigate = useNavigate();
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
        <div className="interview layout-1">
            <div className="header">
                <div className="p-title">クライエントレビュー</div>
                <div className="spark p24"></div>
            </div>
            <div className="interview-list grid">
                {posts.sort((a, b) => a.date < b.date ? 1 : -1).map((post) =>
                    <>
                        {post.categoryId === 2 && 
                        <BlogItem title={post.title} cover={post.cover} description={post.description} date={post.date}/>
                        }
                    </>
                )}
            </div>
            
        </div>
    )
}