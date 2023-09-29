import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './ProfilePage.css'


export default function ProfilePage(){
    const navigate = useNavigate();

    return(
        <div className="profile">
            <section className="intro">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + `/img/profile-top.jpg`}/>
                </div>
                <div className="content">
                    <div className="p-title">プローフィル</div>
                    <p>
                    <span className="semi-bold">【略歴】</span><br/>
                    ・北海道出身<br/>
                    ・東京都内の企業（主に教育産業）にて勤務<br/>
                    ・JICA青年海外協力隊隊員として中国で日本語教育に携わる<br/>
                    ・日本語教師養成講座講師<br/>
                    ・韓国の国立大学にて勤務（助教授待遇）<br/>
                    ・都内の大学にて非常勤講師<br/>
                    ・20代から40代の女性にコーチングを実践<br/><br/>

                    <span className="semi-bold">【学歴】</span><br/>
                    ・早稲田大学社会科学部卒業<br/>
                    ・早稲田大学大学院修士課程修了<br/>
                    ・筑波大学大学院博士後期課程中退<br/><br/>

                    <span className="semi-bold">【資格等】</span><br/>
                    ・日本語教育学修士<br/>
                    ・上級心理カウンセラー<br/>
                    ・九星気学鑑定士<br/>
                    ・レイキマスター
                    </p>
                </div>
            </section>
        </div>
    )
}