import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

import './BlogItem.css'


export default function BlogItem(props){
    return(
        <div className="blog-item flex-column-start gap-base">
                <NavLink to={`/`} className="thumbnail">
                    <img src={process.env.PUBLIC_URL + `/img/trial.png`}/>
                </NavLink>
                <div className="content flex-column-start gap-s">
                    <NavLink to={`/`}><div className="title">あなたの人生のミッションを探します</div></NavLink>
                    <div className="description">こんなふうに思っているかたはぜひ一度体験してみてください。</div>
                    <div className="date">2021.10.6</div>
                </div>
        </div>
    )
}