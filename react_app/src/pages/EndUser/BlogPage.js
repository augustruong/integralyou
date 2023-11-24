import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser'
import words from "../../words";

import BlogItem from "../../components/BlogItem";

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
        <div className="blog layout-1 pt-150">
            <div className="header text-align-ct">
                <div className="p-title mg-base">ブログ</div>
                <div className="spark p24"></div>
            </div>
            <div className="grid gap-xl md:grid-cols-2 xl:grid-cols-3">
            {posts.sort((a, b) => a.date < b.date ? 1 : -1).map((post) =>
                <>
                    {post.categoryId === 1 && 
                        <BlogItem postId={post.id} category={'blog'} title={post.title} cover={post.cover} description={post.description} date={post.date}/>
                    }
                </>
            )}
            </div>
            
        </div>
    )
}