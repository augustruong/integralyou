import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InterviewItem from "../../components/InterviewItem";
import './InterviewPage.css'


export default function InterviewPage(){
    const navigate = useNavigate();

    return(
        <div className="interview layout-1">
            <div className="p-title">クライエントレビュー</div>
            <div className="interview-list">
                <InterviewItem />
                <InterviewItem />
                <InterviewItem />
                <InterviewItem />
            </div>
            
        </div>
    )
}