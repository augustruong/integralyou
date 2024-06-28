import React, { useEffect, useState } from "react";
import words from "../../words";
import Aos from "aos";
import "aos/dist/aos.css";

import './ProfilePage.css'


export default function ProfilePage(){
    const [device,setDevice] = useState("");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.profile.titleJP;

        function handleResize() {
            if (window.innerWidth <= words.device.mb3) { setDevice("mob") } else { setDevice("pc") }
        }
        handleResize();
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="profile">
            <section className="intro layout-2">
                <div className="img">
                    <img className="topImg" src={process.env.PUBLIC_URL + `/img/profile-top.jpg`}/>
                        <img className="polaroid i1" src={process.env.PUBLIC_URL + `/img/profile/intro/profile_intro_01.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.04}px)`}}
                        />
                        <img className="polaroid i2" src={process.env.PUBLIC_URL + `/img/profile/40s/profile_40s_02.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.08}px)`}}
                        />
                    
                </div>
                <div className="content w-50pc">
                    <div className="p-title mx-s">{words.terms.profile.titleJP}</div>
                    <div className="en-title mb-l">{words.terms.profile.titleEN}</div>
                    <div className="spark p24"></div>

                    <p>
                        <span className="semi-bold">【{words.terms.profile.brief}】</span><br/>
                        ・北海道出身<br/>
                        ・東京都内の企業（主に教育産業）にて勤務<br/>
                        ・JICA青年海外協力隊隊員として中国で日本語教育に携わる<br/>
                        ・日本語教師養成講座講師<br/>
                        ・韓国の国立大学にて勤務（助教授待遇）<br/>
                        ・都内の大学にて非常勤講師<br/>
                        ・20代から40代の女性を中心にコーチングを実践<br/><br/>

                        <span className="semi-bold">【{words.terms.profile.academicBG}】</span><br/>
                        ・早稲田大学社会科学部卒業<br/>
                        ・早稲田大学大学院修士課程修了<br/>
                        ・筑波大学大学院博士後期課程中退<br/><br/>

                        <span className="semi-bold">【{words.terms.profile.qualification}】</span><br/>
                        ・日本語教育学修士<br/>
                        ・上級心理カウンセラー<br/>
                        ・九星気学鑑定士<br/>
                        ・レイキマスター
                    </p>
                </div>
            </section>
            <section className="history odd">
                <div className="img">
                    <img className="polaroid i3" src={process.env.PUBLIC_URL + `/img/profile/20s/profile_20s_01.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.04}px)`}}/>
                    <img className="polaroid i4" src={process.env.PUBLIC_URL + `/img/profile/20s/profile_20s_02.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.08}px)`}}/>
                </div>
                <img className="dashline" src={process.env.PUBLIC_URL + `/img/profile/dashline.svg`} />
                <div className="content">
                    <div  className="spark s1 p24"></div>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/profile/20s.svg`} data-aos="fade-right"/>
                    </div>
                    <div style={{fontSize:"28px", fontWeight:"bold"}}>{words.terms.profile.section20s}</div>
                    <p>
                    大学時代に就活ができず、卒業した年の6月に中途採用枠で就職。<br/>
                    しかし、会社で働く能力が足りず、居づらくなりやめる、<br/>
                    というパターンで転職を繰り返す。派遣社員、契約社員含め10社ほどを転々とする。
                    </p>
                </div>
            </section>
            <section className="history even">
                <div className="content" >
                    <div  className="spark s2 p24"></div>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/profile/30s.svg`} data-aos="fade-left"/>
                    </div>
                    <div style={{fontSize:"28px", fontWeight:"bold"}}>{words.terms.profile.section30s}</div>
                    <p>
                    理解ある会社に就職したものの、仕事の面白さがわからず「自分探し」に逃避。飲み歩き、分不相応な買い物、習い事、海外旅行…。何をやっても満たされず、生きながら死んでいるようなメンタルで過ごす。<br/>

                    「どうして私、ふつうにできないの？」と悩み続け、メンタルクリニックなどを渡り歩くも結論は出ず。32歳のとき発達障害と診断され、納得すると同時に安堵。しかし周囲との違和感の正体がわかっても、当然、事態は改善しない。<br/>

                    37歳の時、人生が一変する出来事が起こり、「やりたくないことはやめよう」「人に貢献できる自分になろう」と決意。39歳で会社を辞め日本を飛び出す。
                    </p>
                </div>
                <img className="dashline" src={process.env.PUBLIC_URL + `/img/profile/dashline.svg`} />
                <div className="img">
                    <img className="polaroid i5" src={process.env.PUBLIC_URL + `/img/profile/30s/profile_30s_01.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.04}px)`}}/>
                    <img className="polaroid i6" src={process.env.PUBLIC_URL + `/img/profile/30s/profile_30s_02.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.06}px)`}}/>
                    <img className="polaroid i7" src={process.env.PUBLIC_URL + `/img/profile/30s/profile_30s_03.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.08}px)`}}/>

                </div>
            </section>
            <section className="history odd">
                <div className="img">
                    <img className="polaroid i8" src={process.env.PUBLIC_URL + `/img/profile/40s/profile_40s_01.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.04}px)`}}/>
                    <img className="polaroid i9" src={process.env.PUBLIC_URL + `/img/profile/40s/profile_40s_02.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.06}px)`}}/>
                    <img className="polaroid i10" src={process.env.PUBLIC_URL + `/img/profile/40s/profile_40s_03.png`} data-aos="fade-down"
                        style={{transform: `translateY(${offsetY * 0.08}px)`}}/>
                </div>
                <img className="dashline" src={process.env.PUBLIC_URL + `/img/profile/dashline.svg`} />
                <div className="content">
                    <div  className="spark s3 p24"></div>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/img/profile/40s.svg`} data-aos="fade-right"/>
                    </div>
                    <div style={{fontSize:"28px", fontWeight:"bold"}}>{words.terms.profile.section40s}</div>
                    <p>
                    40代…教育の可能性と面白さに目覚め、大学院に入学し教育分野の研究をする。修了後再び海外へ。<br/>
                    2年後に帰国。この時点でも“人生迷子感”はクリアにならず、途方に暮れていたときにコーチングに出会う。コーチに「謝ってばかりの人生なんかドロップアウトしちゃえ」と言われて目が覚める。その後、自身もコーチングスクールを修了。現在は「自分を生きたい」と切望する人たちをサポートしている。
                    </p>
                </div>
            </section>
            <div className="continue"></div>
        </div>
    )
}