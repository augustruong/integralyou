import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import words from "../../words";

export default function PostDetail(){
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getPost(id);
        console.log(post)
    }, [id]);
  
    function getPost(id) {
        axios.get(words.api.admin.post.detail(id)).then(function(response) {
            setPost(response.data);
            console.log(response.data)
        });
    }

    return(
        <div className="post pt-150">
            <div className="header text-align-ct mb-xl">
                <div className="p-title mg-base">{post.title}</div>
                <div className="spark p24"></div>
            </div>
            <div className="content">
                <div className="relative max-w-1024 aspect-video mx-auto">
                    {<img className="inset-img object-cover" data-nimg="fill" sizes="100vw" decoding="async" loading="eager" src={words.api.admin.file.get(post.cover) ??''}/>}
                </div>
                <div className="container px-base mx-auto xl:px-m max-w-1024 py-m lg:py-xl">
                    <div className="max-w-768 mx-auto my-base">{parse(post.content ??'')}</div>
                </div>
            </div>
        </div>
    )
}