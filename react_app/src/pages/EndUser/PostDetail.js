import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import words from "../../words";

import './PostDetail.css'

export default function PostDetail(){
    const [curPost, setCurPost] = useState({});
    const [prevPost, setPrevPost] = useState({});
    const [nextPost, setNextPost] = useState({});
    var categoryId;

    const {category,id} = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);
        if (category==='blog') categoryId = 1;
        else if (category==='interview') categoryId = 2;
        else categoryId = 3;
        
        getCurPost(id);
        getPosts(id);
    }, [id]);
  
    function getCurPost(id) {
        axios.get(words.api.admin.post.detail(id)).then(function(response) {
            setCurPost(response.data);
        });
    }
    function getPosts(id) {
        axios.get(words.api.admin.post.list).then(function(response) {
            for (let post of response.data) {
                if (post.categoryId === categoryId) {
                    if (post.id < id) setPrevPost(post);
                    else if (post.id > id) {
                        setNextPost(post)
                        return;
                    }
                }
            }
        });
    }

    return(
        <div className="post pt-150">
            <div className="header text-align-ct mb-xl">
                <div className="p-title mg-base">{curPost.title}</div>
                <div className="spark p24"></div>
            </div>
            <div className="content">
                <div className="relative max-w-768 aspect-video mx-auto">
                    {<img className="inset-img object-cover" data-nimg="fill" sizes="100vw" decoding="async" loading="eager" src={words.api.admin.file.get(curPost.cover) ??''}/>}
                </div>
                <div className="container px-base mx-auto xl:px-m max-w-1024 py-m lg:py-xl">
                    <div className="max-w-768 mx-auto my-base">{parse(curPost.content ??'')}</div>
                    <div className="max-w-768 mx-auto mt-xl">
                        <a href='/blog' >
                            <button className="primary">ブログ一覧へ戻る</button>
                        </a>
                    </div>
                    
                </div>
                
            </div>

            <div id="previous_next_post" className="max-w-768 mx-auto">
                {prevPost.id !== undefined &&
                <div className="prev_post">
                    <a href={`/blog/${prevPost.id}`} title="前の記事">
                        <span class="title">{prevPost.title}</span>
                    </a>
                </div>
                }
                {nextPost.id !== undefined &&
                <div className="next_post">
                    <a href={`/blog/${nextPost.id}`}title="次の記事">
                        <span class="title">{nextPost.title}</span>
                    </a>
                </div>
                }
            </div>
        </div>
    )
}