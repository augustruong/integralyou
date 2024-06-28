import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'
import words from "../../words";

import './NewsPage.css'


export default function NewsPage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.news.titleJP;

        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }

    return(
        <div className="news layout-1 pt-150">
            <div className="header text-align-ct">
                <div className="p-title mx-s">{words.terms.news.titleJP}</div>
                <div className="en-title mb-l">{words.terms.news.titleEN}</div>
                <img className="spark p24" src={process.env.PUBLIC_URL + `/img/spark.svg`}/>
            </div>
            <div className="news-list">
            {posts.sort((a, b) => a.date < b.date ? 1 : -1).map((post) =>
                <>
                    {post.categoryId === 3 && 
                        <div className="news-item flex-row-start gap-xl">
                            <img src={process.env.PUBLIC_URL + `/img/icon/news.svg`}/>
                            <div>
                                <div className="date">{post.date}</div>
                                <div className="title">{post.title}</div>
                                <div className="content">{parse(post.content)}</div>
                            </div>
                        </div>
                    }
                </>
            )}
            </div>
            
        </div>
    )
}