import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './MessagePage.css'


export default function MessagePage(){
    const navigate = useNavigate();

    return(
        <div className="message">
            <section className="intro layout-2">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/message-img.png`}/>
                </div>
                <div className="content-wrapper flex-column-start gap-l">
                    <div className="p-title">メッセージ</div>
                    <p>生き方とキャリアを考えるとき<br/>
                    「ひとりで考えても答えが出ない問題」に<br/>
                    ぶつかることが必ずあります。<br/><br/>

                    もし今あなたが<br/>
                    ひとりで悩み続けているなら<br/><br/>

                    人生のミッションを見つける専門家<br/>
                    <span className="primary-pink bold">integral you</span> が<br/>
                    全力でサポートします<br/><br/>

                    二人三脚で<br/>
                    あなたが心から望む人生を実現しましょう
                    </p>
                </div>
            </section>
        </div>
    )
}