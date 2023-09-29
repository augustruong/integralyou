import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

import './InterviewItem.css'


export default function InterviewItem(props){
    return(
        <div className="interview-item flex-column-start gap-base">
                <NavLink to={`/`} className="thumbnail">
                    <img src={process.env.PUBLIC_URL + `/img/IMG_3742.png`}/>
                </NavLink>
                <div className="content flex-column-start gap-s">
                    <NavLink to={`/`}><div className="title">T様</div></NavLink>
                    <div className="info">(50代・男性・会社員)</div>
                    <div className="description">こんなふうに思っているかたはぜひ一度体験してみてください。</div>
                    <div className="date">2021.10.6</div>
                </div>
        </div>
    )
}