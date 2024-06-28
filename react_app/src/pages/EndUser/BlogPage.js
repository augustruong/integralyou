import React, { useEffect, useState } from "react";
import axios from "axios";
import words from "../../words";

import BlogItem from "../../components/BlogItem";

export default function BlogPage(){
    // const [allpost, setAllPost] = useState([]);
    const [blog, setBlog] = useState([]);
    // const [blogIdArray,setBlogIdArray] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.blog.titleJP;

        getPosts();
    }, []);

    
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            // setAllPost(response.data);
            response.data.map((post) => {
                if (post.categoryId === 1) {
                    setBlog(blog => [...blog, post])
                    // setBlogIdArray(blogIdArray => [post.id,...blogIdArray])
                }
            })
        });
    }
    return(
        <div className="blog layout-1 pt-150">
            <div className="header text-align-ct">
                <div className="p-title mx-s">{words.terms.blog.titleJP}</div>
                <div className="en-title mb-l">{words.terms.blog.titleEN}</div>
                <div className="spark p24"></div>
            </div>
            <div className="grid gap-xl md:grid-cols-2 xl:grid-cols-3">
            {blog.sort((a, b) => a.date < b.date ? 1 : -1).map((post,index) =>
                <>
                    <BlogItem postId={post.id} key={post.id} category={'blog'} title={post.title} cover={post.cover} description={post.description} 
                    date={post.date}/>
                </>
            )}
            </div>
            
        </div>
    )
}