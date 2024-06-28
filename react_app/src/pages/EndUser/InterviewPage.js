import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import words from "../../words";

import BlogItem from "../../components/BlogItem";

export default function InterviewPage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.interview.titleJP;

        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }
    return(
        <div className="interview layout-1 pt-150">
            <div className="header text-align-ct">
                <div className="p-title mx-s">{words.terms.interview.titleJP}</div>
                <div className="en-title mb-l">{words.terms.interview.titleEN}</div>
                <div className="spark p24"></div>
            </div>
            <div className="grid gap-xl md:grid-cols-2 xl:grid-cols-3">
                {posts.sort((a, b) => a.date < b.date ? 1 : -1).map((post) =>
                    <>
                        {post.categoryId === 2 && 
                        <BlogItem postId={post.id} category={'interview'} title={post.title} cover={post.cover} description={post.description} date={post.date}/>
                        }
                    </>
                )}
            </div>
            
        </div>
    )
}