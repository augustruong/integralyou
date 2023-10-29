import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import words from "../../words";

import BlogItem from '../../components/BlogItem'

import './TopPage.css'

export default function TopPage(){
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const [inputs, setInputs] = useState([]);
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
  
        axios.post(words.api.admin.subscriber.add, inputs).then(function(response){
            console.log(response.data);
        }); 
    }

    useEffect(() => {
        getPosts();
    }, []);
  
    function getPosts() {
        axios.get(words.api.admin.post.list).then(function(response) {
            setPosts(response.data);
        });
    }
    return(
        <div className="top-page">
            <a className="news-icon" href='/news'>
                <img src={process.env.PUBLIC_URL + `/img/icon/news.svg`}/>
                <div className="text">お知らせ</div>   
            </a>
            <section className="hero">
                <div className="top-banner">生き方とキャリアに迷うあなたへ</div>
                <div className="kv-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/keyvisual.png`}/>
                </div>
            </section>
            <section className="video layout-1">
                <iframe width="810" height="460" src="https://www.youtube.com/embed/WrxqqvW1wKk?si=4uTgOSM_sJszIIE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <a href='/profile'>
                    <button className="primary">プロフィールを見る</button>
                </a>
            </section>
            <section className="message layout-2">
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
                    <a href='/message'>
                        <button className="primary">もっと見る</button>
                    </a>
                </div>
            </section>
            <section className="service layout-1">
                <div className="content-wrapper flex-column-ct gap-l">
                    <div className="p-title">サービス概要</div>
                    <p className="text-align-ct">
                        <span className="primary-pink bold">integral you</span> は、あなたが “人生のミッションを生きる” ための<br/>
                        「コーチング」や「グループ講座」を提供しています。<br/><br/>
                        コーチングやカウンセリングのメソッドを援用したセッションを<br/>
                        とおして、生き方やキャリアについてあなたが抱えている課題の<br/>
                        解消を目指すマンツーマンのサポートプログラムです。
                    </p>
                    <a href='/program'>
                        <button className="primary">詳しくはこちら</button>
                    </a>
                </div>
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/service.png`}/>
                </div>
            </section>

            <section className="coaching">
                <div className="background"></div>
                <div className="layout-1">
                    <div className="p-title">人生のミッション探索コーチング</div>
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
                        <div className="flex-row-ct gap-xxl">
                            <div className="flex-column-start gap-m">
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
                            <div className="flex-column-start gap-m">
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
                <div className="content-wrapper flex-column-ct gap-xl">
                    <div className="p-title">60分コーチングセッション</div>
                    <p className="text-align-ct">
                        やりたいことの種を見つける！ 自分が今どんなことを考えているのか知りたい、<br/>
                        <span className="bold color-primary-pink">integral you </span>のコーチングを受けてみたい、という方のためのコーチングです。<br/>
                        60分のミニセッションですが、充実した内容となっています。（おひとり様1回限り）
                    </p>
                    <a href='/contact'>
                        <button className="primary">今すぐ体験したい</button>
                    </a>
                </div>
                <div className="img-wrapper flex-row-ct">
                    <img src={process.env.PUBLIC_URL + `/img/trial.png`}/>
                    <div>
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
                <div className="content-wrapper">
                    <div className="p-title">プログラム</div>
                    <div className="flex-row-ct justify-space-btw">
                        <p>
                            コースは「6ヵ月コース」と「4ヵ月コース」の２つ。<br/>
                            コースをご選択される前に、「体験セッション」を受けていただくことをおすすめしています。
                        </p>
                        <a href='/program'>
                            <button className="primary">詳しくはこちら</button>
                        </a>
                    </div>
                </div>
                <div className="img-wrapper flex-row-ct justify-space-btw">
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/program-6.png`}/>
                        <div className="flex-row-ct gap-base">
                            <div className="bigNum color-primary-pink">6</div>
                            <div>
                                <div className="color-primary-pink">ヵ月コース</div>
                                <p>
                                    一般的に標準の期間とされる半年間のコースです。<br/>すべての人におすすめできるコースです。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/program-4.png`}/>
                        <div className="flex-row-ct gap-base">
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
                        <BlogItem title={post.title} cover={post.cover} description={post.description} date={post.date}/>
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
                <div className="flex-row-ct gap-base">
                    <a href='/faq'>
                        <button className="primary">FAQ を見る</button>
                    </a>
                    <a href='/contact'>
                        <button>お問い合わせ</button>
                    </a>
                </div>
            </section>
            <section className="newsletter layout-2">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/IMG_3742.png`}/>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <header className="newsletter-header">
                        <div className="p-title">newsletter</div>
                        <div>Eメールアドレスを登録すると、毎週ニュースや最新情報が届きます。</div>
                    </header>    
                    <div className="newsletter-body">
                        <div className="flex-row-ct gap-s">
                            <input type="text" id="lname" name="lastname" placeholder="氏" onChange={handleChange}/>
                            <input type="text" id="fname" name="firstname" placeholder="名" onChange={handleChange}/>
                        </div>
                        <input type="email" id="email" name="email" placeholder="メールアドレス" className="full" onChange={handleChange}/>
                        <button type="submit" name="add" className="primary">登録</button>
                    </div>
                </form>
            </section>
        </div>
    )
}