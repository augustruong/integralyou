import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import words from "../../words";

import BlogItem from '../../components/BlogItem'
import SubscribeForm from "../../components/SubscribeForm";

import './TopPage.css'
import '../../App.css'


export default function TopPage(){
    const navigate = useNavigate();
    const [device,setDevice] = useState("");
    const [posts, setPosts] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [submitted,setSubmitted] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
  
        axios.post(words.api.admin.subscriber.add, inputs).then(function(response){
            setSubmitted(true)
        }); 
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        
        getPosts();
        handleResize();
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleResize() {
        if (window.innerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
    }
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }
    return(
        <div className="top-page">
            <div className="bgGradient">
                <div className="up"></div>
                <div className="down"></div>
                <div className="left"></div>
                <div className="right"></div>
            </div>
            
            <section className="hero">
                <div className="top-banner">生き方とキャリアに迷うあなたへ</div>
                <div className="content">
                    <div className="kv-wrapper" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.04}px)`}}>
                        <img src={process.env.PUBLIC_URL + `/img/kv-model.png`}/>
                    </div> 
                    <div className="text-wrapper">
                        <div className="kv-title mb-m">人生の<span className="black-pink">ミッション</span><br/>を<span className="black-pink">生きよう</span></div>
                        <div className="kv-subtitle flex-row-ct gap-m">
                            <div className="spark p24"></div>
                            <p>チャレンジし、成長して、<br/>豊かに生きるあなたへ進化する</p>
                        </div>
                        <div className="cta-group">
                            <a href='/program'>
                                <button className="primary mr-base">コースを見る</button>
                            </a>
                            <a href='/profile'>
                                <button>プロフィールを見る</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="spark-p278"></div>
            </section>
            <section className="video layout-1">
                <iframe width="810" height="460" src="https://www.youtube.com/embed/WrxqqvW1wKk?si=4uTgOSM_sJszIIE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <a href='/profile'>
                    <button className="primary">プロフィールを見る</button>
                </a>
            </section>
            <div className="message layout-2">
                <section className="intro layout-2">
                    <div className="img-wrapper" data-aos="fade-down">
                        <img src={process.env.PUBLIC_URL + `/img/message-you-${device}.png`}
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
                        <a href='/message'>
                            <button className="primary">もっと見る</button>
                        </a>
                    </div>
                </section>
            </div>
            <section className="service layout-1 mt-100">
                <div className="content-wrapper flex-column-ct gap-l px-5pc">
                    <div className="p-title">サービス概要</div>
                    <p className="p-center p-left">
                        <span className="primary-pink bold">integral you</span> は、あなたが “人生のミッションを生きる” ための
                        {window.innerWidth > 768 ? <br/> : ""}
                        「コーチング」や「グループ講座」を提供しています。<br/><br/>
                        コーチングやカウンセリングのメソッドを援用したセッションを {window.innerWidth > 768 ? <br/> : ""}
                        とおして、生き方やキャリアについてあなたが抱えている課題の {window.innerWidth > 768 ? <br/> : ""}
                        解消を目指すマンツーマンのサポートプログラムです。
                    </p>
                    <a href='/program'>
                        <button className="primary">詳しくはこちら</button>
                    </a>
                </div>
                <div className="img-wrapper" data-aos="fade-up">
                    <img src={process.env.PUBLIC_URL + `/img/service-${device}.png`}/>
                </div>
            </section>

            <section className="coaching mb-100">
                <div className="background"></div>
                <div className="layout-1 w-100pc px-5pc">
                    <div className="p-title text-align-ct">人生のミッション{window.innerWidth < 768 ? <br/> : ""}探索コーチング</div>
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
                    <div className="flex-column-ct">
                        <div className="sub-title">クライアントの成果</div>
                        <div className="pc-flex-row-ct mb-flex-col-ct gap-xxl">
                            <div className="flex-column-start gap-m mb-m">
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-career.png`}/>
                                    <div>天職と思える仕事に出会えた</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-members.png`}/>
                                    <div>社内で念願のプロジェクトのメンバーに抜擢された</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-100.png`}/>
                                    <div>前触れもなく年収が100万円アップした</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-startup.png`}/>
                                    <div>独立した年に会社員時代の年収を超えた</div>
                                </div>
                            </div>
                            <div className="flex-column-start gap-m mb-m">
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-manager.png`}/>
                                    <div>企画がとおり新しい部署のマネージャーになった</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-remote.png`}/>
                                    <div>起業してずっと希望していた在宅ワークが実現した</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-marriage.png`}/>
                                    <div>あきらめていたがアラフィフで結婚した</div>
                                </div>
                                <div className="flex-row-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-lovers.png`}/>
                                    <div>コミュ障で友人もいなかったのに恋人ができた</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trial layout-1">
                <div className="content-wrapper flex-column-ct gap-l w-100pc px-5pc">
                    <div className="p-title text-align-ct">60分コーチング{window.innerWidth < 768 ? <br/> : ""}セッション</div>
                    <p className="p-center p-left">
                        やりたいことの種を見つける！ 自分が今どんなことを考えているのか知りたい、{window.innerWidth > 768 ? <br/> : ""}
                        <span className="bold color-primary-pink">integral you </span>
                        のコーチングを受けてみたい、という方のためのコーチングです。{window.innerWidth > 768 ? <br/> : ""}
                        60分のミニセッションですが、充実した内容となっています。（おひとり様1回限り）
                    </p>
                    <a href='/contact'>
                        <button className="primary">今すぐ体験したい</button>
                    </a>
                </div>
                <div className="visual-wrapper pc-flex-row-ct mb-flex-col-ct mb-w-100pc">
                    <div className="img-wrapper">
                        <img src={process.env.PUBLIC_URL + `/img/trial.png`} className="mb-w-100pc" style={{zIndex:"100"}}/>
                    </div>
                    <div className="text-wrapper" data-aos="fade-right">
                        <div className="sub-title">60分コーチングセッションで得られるもの</div>
                        <div className="bullet-list">
                            <div className="bullet-point">自分の現在地が把握できる</div>
                            <div className="bullet-point">自分の課題がわかる</div>
                            <div className="bullet-point">今後の方向性がわかる</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="program layout-1">
                <div className="content-wrapper flex-column-ct gap-l w-100pc px-5pc">
                    <div className="p-title">プログラム</div>
                    <p className="p-center p-left">
                        コースは「6ヵ月コース」と「4ヵ月コース」の２つ。<br/>
                        コースをご選択される前に、「体験セッション」を受けていただくことをおすすめしています。
                    </p>
                    <a href='/program'>
                        <button className="primary">詳しくはこちら</button>
                    </a>
                </div>
                <div className="img-wrapper pc-flex-row-ct mb-flex-col-ct gap-xl">
                    <div className="course-wrapper mb-xl" data-aos="flip-right">
                        <div className="img-wrapper mx-auto">
                            <img src={process.env.PUBLIC_URL + `/img/program-6.png`} className="w-100pc"/>
                        </div>
                        <div className="info-wrapper flex-row-ct gap-base">
                            <div className="bigNum color-primary-pink">6</div>
                            <div>
                                <div className="color-primary-pink">ヵ月コース</div>
                                <p>
                                    一般的に標準の期間とされる半年間のコースです。<br/>すべての人におすすめできるコースです。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="course-wrapper mb-xl" data-aos="flip-right">
                        <div className="img-wrapper mx-auto">
                            <img src={process.env.PUBLIC_URL + `/img/program-4.png`}  className="w-100pc"/>
                        </div>
                        <div className="info-wrapper flex-row-ct gap-base">
                            <div className="bigNum color-coral">4</div>
                            <div>
                                <div className="color-coral">ヵ月コース</div>
                                <p>
                                    価値観を整理したい、自分の棚卸しをしたいなど<br/>目的がはっきりしている方におすすめします。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog layout-1">
                <div className="p-title">ブログ</div>
                <div className="blog-list">
                    {posts.filter(item => item.categoryId === 1).sort((a, b) => a.date < b.date ? 1 : -1).slice(0,3).map((post) =>
                        <>
                        {post.categoryId === 1 && 
                            <BlogItem postId={post.id} category={'blog'} title={post.title} cover={post.cover} description={post.description} date={post.date}/>
                        }
                        </>
                    )}
                </div>
                <a href='/blog'>
                    <button className="primary">もっと見る</button>
                </a>
            </section>
            <section className="contact layout-1">
                <div className="p-title">不明点がありますか？</div>
                <div className="img-wrapper">
                    <img className="main" src={process.env.PUBLIC_URL + `/img/IMG_3793.png`} />
                    <img className="mark1" src={process.env.PUBLIC_URL + `/img/mark1.png`}/>
                    <img className="mark2" src={process.env.PUBLIC_URL + `/img/mark2.png`}/>
                </div>
                <div className="cta-group flex-row-ct">
                    <a href='/faq'>
                        <button className="primary">FAQ を見る</button>
                    </a>
                    <a href='/contact'>
                        <button>お問い合わせ</button>
                    </a>
                </div>
            </section>
            <section className="newsletter layout-2">
                <div className="img-wrapper" >
                    <img src={process.env.PUBLIC_URL + `/img/IMG_3742.png`}/>
                </div>
                <SubscribeForm/>
            </section>
        </div>
    )
}