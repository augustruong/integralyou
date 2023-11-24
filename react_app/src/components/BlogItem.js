import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import words from "../words";

import './BlogItem.css'

export default function BlogItem(props){
    useEffect(() => {
        console.log(props)
    }, []);
    return(
        <div className="blog-item flex-column-start gap-base">
                <NavLink to={`${props.postId}`} className="thumbnail">
                    {props?.cover && <img src={words.api.admin.file.get(props.cover)}/>}
                </NavLink>
                <div className="content flex-column-start gap-s">
                    <NavLink to={`${props.postId}`}><div className="title">{props.title}</div></NavLink>
                    <div className="description">{props.description}</div>
                    <div className="date">{props.date}</div>
                </div>
        </div>
    )
}