import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import './ProgramPage.css'

export default function ProgramPage(){
    const [device,setDevice] = useState("pc");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1080) { setDevice("mb") } else { setDevice("pc") }
        }
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="program">
            <section className="intro">
                <div className="p-title">プログラム</div>
                <div className="layout-2">
                    <div className="img-wrapper" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.04}px)`}} >
                        <img data-aos="fade-right"  src={process.env.PUBLIC_URL + `/img/IMG_3793.jpg`}/>
                    </div>
                    <div className="content-wrapper">
                        <img className="spark" src={process.env.PUBLIC_URL + `/img/spark.svg`}/>
                        <div className="m-title">「人生のミッション探索コーチング」</div>
                        <p>
                            クライアントが「自分のミッションを果たしていると感じられる生き方」を実現するためのマンツーマンのサポートプログラムです。<br/>
                            コーチングやカウンセリングのメソッドを援用したセッションを重ねる
                            ことで、生き方やキャリアについてあなたが抱えている課題を解消し、<br/>
                            チャレンジし成長するあなたにアップデートすることを目指します。
                        </p>
                    </div>
                </div>  
            </section>
            <section className="features flex-column-ct" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.06}px)`}}>
                <div className="m-title">integral youのサポートプログラムが目指すもの</div>
                <img  className="spark" src={process.env.PUBLIC_URL + `/img/spark.svg`}/>
                <div className="items">
                    <div className="feature-item" data-aos="flip-right" >
                        <img src={process.env.PUBLIC_URL + `/img/program/featureIcon-1.svg`} />
                        <img src={process.env.PUBLIC_URL + `/img/program/featureBase-1.svg`}/>
                    </div>
                    <div className="feature-item"  data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/featureIcon-2.svg`}/>
                        <img src={process.env.PUBLIC_URL + `/img/program/featureBase-2.svg`}/>
                    </div>
                    <div className="feature-item" data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/featureIcon-3.svg`} />
                        <img src={process.env.PUBLIC_URL + `/img/program/featureBase-3.svg`}/>
                    </div>
                </div>
            </section>
            <section className="steps flex-column-ct">
                <div className="header flex-row-ct justify-space-btw">
                    <div className="arrow">
                        <img src={process.env.PUBLIC_URL + `/img/program/arrowRight.svg`}/>
                    </div>
                    <div className="flex-column-ct">
                        <div className="p-title">4 STEPS</div>
                        <p className="text-align-ct">
                        <span className="primary-pink bold">integral you</span>がご提供するサポートプログラムの具体的なステップは、概ね次の通りです。<br/>
                        創りたい未来を現実化させるための４Stepsです。
                        </p>
                        <div className="spark p24"></div>
                    </div>
                    <div className="arrow">
                        <img src={process.env.PUBLIC_URL + `/img/program/arrowLeft.svg`}/>
                    </div>
                </div>
                <div className="content">
                    <div className="step-item">
                        <img src={process.env.PUBLIC_URL + `/img/program/stepIcon-1.svg`} data-aos="flip-left"/>
                        <div className="label" data-aos="fade-right">Step 1</div>
                        <p>
                            ・自分の本当の望みを知る<br/>
                            ・建て前と本音のギャップを知る<br/>
                            ・思考のクセを意識する<br/>
                            ・自分の能力に気づく
                        </p>
                    </div>
                    <div className="step-item">
                        <img src={process.env.PUBLIC_URL + `/img/program/stepIcon-2.svg`} data-aos="flip-left" data-aos-delay="200"/>
                        <div className="label" data-aos="fade-right" data-aos-delay="200">Step 2</div>
                        <p>
                            ・やりたいこと、できることを整理する<br/>
                            ・本当はやりたくないことを知る<br/>
                            ・自分の能力を客観的に評価する
                        </p>
                    </div>
                    <div className="step-item">
                        <img src={process.env.PUBLIC_URL + `/img/program/stepIcon-3.svg`} data-aos="flip-left" data-aos-delay="400"/>
                        <div className="label" data-aos="fade-right" data-aos-delay="400">Step 3</div>
                        <p>
                            ・具体的・長期的な目標を設定する<br/>
                            ・ぶれない目的意識を創る<br/>
                            ・目標達成の練習をする<br/>
                            ・トライ＆エラーで行動する
                        </p>
                    </div>
                    <div className="step-item">
                        <img src={process.env.PUBLIC_URL + `/img/program/stepIcon-4.svg`} data-aos="flip-left" data-aos-delay="600"/>
                        <div className="label" data-aos="fade-right" data-aos-delay="600">Step 4</div>
                        <p>
                            ・行動できるマインドを強化する<br/>
                            ・失敗、落ち込み、立ち直りを経験する<br/>
                            ・達成感、充実感を体感する
                        </p>
                    </div>
                </div>
            </section>
            <section className="courses layout-1">
                <div className="header">
                    <div className="p-title">コース</div>
                    <p className="text-align-ct">
                        コースは<span className="bold label">「6ヵ月コース」</span>と<span className="bold">「4ヵ月コース」</span>の２つ。<br/>
                        コースをご選択される前に、<span className="bold">「60分コーチングセッション」</span>を受けていただくことをおすすめしています。
                    </p>
                    <div className="spark p24"></div>
                </div>
                <div className="gallery">
                    <div className="img-wrapper mx-auto" data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/course-6m-${device}.png`} className="mx-auto" />
                    </div>
                    <div className="img-wrapper mx-auto" data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/course-4m-${device}.png`} className="mx-auto"/>
                    </div>
                    <div className="img-wrapper mx-auto" data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/course-120p-${device}.png`} className="mx-auto"/>
                    </div>
                    <div className="img-wrapper mx-auto" data-aos="flip-right">
                        <img src={process.env.PUBLIC_URL + `/img/program/course-60p-${device}.png`} className="mx-auto"/>
                    </div>
                </div>
                <button className="primary">今すぐ登録したい</button>
            </section>
            <section className="process layout-1">
                <div className="header">
                    <div className="p-title">セッションの進め方</div>
                    <div className="spark p24"></div>
                </div>
                <div className="gallery layout-1">
                    <div className="item-wrapper" data-aos="zoom-in" data-aos-delay="0">
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-1.svg`}/>
                        <div className="frame">セッションは1回120分までです。対話をとおして、あなたの「思考」や「感情」を言語化し、明確にしていきます。あなたの人生のボトルネックを見つけましょう。</div>
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-1.svg`}/>
                    </div>
                    <div className="item-wrapper" data-aos="zoom-in" data-aos-delay="100">
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-2.svg`}/>
                        <div className="frame">4つのステップを順にクリアしていきます。それにより、あなたの「挑戦し成長を楽しむマインド」を無理なく育てます。※6ヵ月コースの場合</div>
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-2.svg`}/>
                    </div>
                    <div className="item-wrapper" data-aos="zoom-in" data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-3.svg`}/>
                        <div className="frame">セッションでは、おもに対話によりあなたの内省を引き出します。教えたりアドバイスをしたりすることがメインではありません。</div>
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-3.svg`}/>
                    </div>
                    <div className="item-wrapper" data-aos="zoom-in" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-4.svg`}/>
                        <div className="frame">決まったテキストのようなものはありません。あなたにあったワークをその都度課題としてお渡しします。ワークの結果を次のセッションで分析していきましょう。</div>
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-4.svg`}/>
                    </div>
                    <div className="item-wrapper" data-aos="zoom-in" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-5.svg`}/>
                        <div className="frame">セッションとセッションの間に、質問がありましたらLINEでメッセージをください。お約束の時間内にご返信します。弱音を吐きたくなった、グチや文句を言いたくなった、などでも大丈夫です。いつでもあなたとつながっています。</div>
                        <img src={process.env.PUBLIC_URL + `/img/program/i-process-5.svg`}/>
                    </div>
                </div>
            </section>
            <section className="schedule layout-1">
                <div className="header">
                    <div className="p-title">セッションスケジュール（例）</div>
                    <div className="spark p24"></div>
                </div>
                <div className="layout-1">
                    <img src={process.env.PUBLIC_URL + `/img/program/table-6m-${device}.png`} data-aos="fade-right"/>
                    <img src={process.env.PUBLIC_URL + `/img/program/table-4m-${device}.png`} data-aos="fade-left"/>
                </div>
            </section>
        </div>
    )
}