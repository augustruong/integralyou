import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import './MessagePage.css'

export default function MessagePage(){
    const [device,setDevice] = useState("pc");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
        }
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="message">
            <section className="intro layout-2">
                <div className="img-wrapper" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.08}px)`}}>
                    <img src={process.env.PUBLIC_URL + window.innerWidth < 768 ? `/img/message-you-mb.png` : `/img/message-you-pc.png`} 
                         className="w-100pc" data-aos="fade-right"/>
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
            <div className="m-scroll">
                <div className="m-scroll__title">
                        <div>
                        <div className="slidingText">「ミッションを果たしていると感じられる生き方がしたい」</div>
                        <div className="slidingText">「ミッションを果たしていると感じられる生き方がしたい」</div>
                        <div className="slidingText">「ミッションを果たしていると感じられる生き方がしたい」</div>
                        <div className="slidingText">「ミッションを果たしていると感じられる生き方がしたい」</div>
                        </div>
                </div>
            </div>
            <section className="second layout-1">
                <div className="flex-column-ct">
                    <div className="sub-title">クライアントの主なテーマ</div>
                    <div className="tag-wrapper">
                        <div className="tag">仕事・キャリア</div>
                        <div className="tag">自己理解・自己分析</div>
                        <div className="tag">人生の課題・目標</div>
                        <div className="tag">モチベーション</div>
                        <div className="tag">起業・独立</div>
                        <div className="tag">人間関係</div>
                        <div className="tag">ネガティブな感情</div>
                        <div className="tag">将来への不安</div>
                        <div className="tag">過去に対する執着</div>
                        <div className="tag">意志力・継続力</div>
                        <div className="tag">感情の整理</div>
                    </div>
                </div>
                <div className="messageBox" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.04}px)`}}>
                    <img className="spark p42" src={process.env.PUBLIC_URL + `/img/spark.svg`}/>
                    <div className="frame">
                        <p>
                        仕事もプライベートもおもしろくない！<br/>
                        何をやっても楽しいと思えない！<br/>
                        かといってやりたいこともわからない！<br/><br/>

                        今、私はこんな人たちのために<br/>
                        コーチングセッションや講座を提供しています。<br/><br/>

                        クライアントさんの年齢層は20代～50代と幅広く、<br/>
                        おもに女性が中心です。
                        </p>
                    </div>
                </div>
                <a href='/program'>
                    <button className="primary">コースの詳しを見る</button>
                </a>
            </section>
        </div>
    )
}