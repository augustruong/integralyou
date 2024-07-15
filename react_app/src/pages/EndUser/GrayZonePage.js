import React, { useState,useEffect } from "react";
import words from "../../words";
import Aos from "aos";
import "aos/dist/aos.css";

import './GrayZonePage.css'

export default function GrayZonePage(){
    const [device,setDevice] = useState("");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    function handleResize() {
        if (window.outerWidth <= 768) { setDevice("mb") } else { setDevice("pc") }
        console.log(window.outerWidth)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.grayzone.titleJP;

        handleResize();
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(
        <div className="grayzone">
            <section className="intro layout-1">
                <div className="content-wrapper flex-row justify-space-btw">
                    <div className=" title mx-s">
                        <span className="develop-disable black-pink">{words.terms.grayzone.developdisable}</span><br/>
                        <span className="gray-zone ">{words.terms.grayzone.grayzone}</span>
                    </div>
                    <p>
                        このページを開いてくださったということは、<br/>
                        あなたは今、ありのままの自分で生きることの難しさ、<br/>
                        周囲との違和感を抱えているのではないでしょうか。
                    </p>
                </div>
                <div className="img-wrapper" data-aos="fade-down" style={{transform: `translateY(${offsetY * 0.06}px)`}}>
                    <img src={process.env.PUBLIC_URL + `/img/grayzone/grayzone-kv.png`} className="w-100pc"/>
                </div>
            </section>
            <section className="message-1 layout-1" data-aos="fade-down">
                <div className="content-wrapper text-align-ct">
                    <div className="p-title mb-xl">
                    「なんで私はふつうにできないの？」<br/>「私、おかしいの？」
                    </div>
                    <p className="text-align-ct">職場でこんなふうに感じたことはありませんか？</p>
                </div>
                <div className="gradient"></div>
            </section>
            <section className="message-2">
                <div className="p1 flex-row">
                    <div className="content-wrapper">
                        <div className="p-title mb-xl"><span className="color-gray">例えば、</span>こんなこと<span className="color-gray">はないでしょうか。</span></div>
                        <p>
                        そんなつもりはないのに、<br/>トンチンカンなことを言って笑われたり、<br/>冷たい目で見られる。<br/><br/>
                        集中しなくちゃと思っているのに<br/>気づくとぼーっとしてしまう。<br/><br/>
                        まじめにやっているのに、ふざけていると思われたり<br/>手を抜いていると思われる。<br/><br/>
                        会議など複数の人が話をする場面でついていけない。<br/>わかったふりをして話を合わせたり発言したりする。<br/><br/>
                        許容範囲を超えるほど、気づくと何かを忘れている。<br/>いつも何か探し物をしている。<br/><br/>
                        ミスが多く周りにあきれられている。<br/>職場ではいつも謝っている。
                        </p>
                    </div>
                    <div className="img-wrapper" data-aos="fade-down">
                        <div className="line"></div>
                        <div className="spark p200"></div>
                    </div>
                </div>
                <div className="p2 flex-row">
                    <div className="img-wrapper" data-aos="fade-right">
                    <   div className="line"></div>
                        <div className="spark p72" ></div>
                    </div>
                    <div className="content-wrapper">
                        <p>
                        同じことを何度も聞いてしまう。<br/>
                        一度で理解できずに自分は理解力が低いのか<br/>
                        と思うことがある。
                        <br/><br/>
                        ポイントを押さえて伝えるのが苦手。<br/>
                        話しながら頭の中がこんがらがってしまう。<br/>
                        <br/><br/>
                        電話の対応がうまくできない。<br/>
                        周りに聞かれるのが怖くて、声が小さくなってしまう
                        <br/><br/>
                        学校の成績とは関係なく自分のことを<br/>
                        「人より頭が悪いんじゃないか」と思うことがある。
                        <br/><br/>
                        反射的に謝るか、笑ってごまかすクセがついている。
                        <br/><br/>
                        現実に対応するだけで、いっぱいいっぱいで<br/>
                        わくわくする未来や、夢なんて考えられない…
                        <br/><br/>
                        実は、これすべて、会社員時代の私のことです。
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="message-4 layout-2">
                <div className="img-wrapper" data-aos="fade-up">
                    <img src={process.env.PUBLIC_URL + `/img/grayzone/mystory.png`} className="w-100pc"/>
                </div>
                <div className="content-wrapper">
                    {device === "pc" &&
                    <div className="p-title mb-xl"><span className="color-gray">私は30歳を過ぎて</span>発達障害<br/><span className="color-gray">と診断されました。</span></div>}
                    {device === "mb" &&
                    <div className="p-title mb-xl"><span className="color-gray">私は30歳を過ぎて<br/></span>発達障害<span className="color-gray">と診断されました。</span></div>}
                    <p>
                    その時の半ばホッとした気持ちを今も覚えています。
                    <br/><br/>
                    もちろん、それがわかったからと言って<br/>
                    すぐに困りごとがなくなるわけではありませんし、
                    <br/><br/>
                    発達障害だからといってミスをそのせいにしたり<br/>
                    仕事ができないことの言い訳にもなりません。
                    <br/><br/>
                    でも、原因がわかれば<br/>
                    対処の仕方も考えることができます。
                    <br/><br/>
                    私は、発達障害に関する情報を<br/>
                    徹底的に集めました。
                    <br/><br/>
                    ひとりで思考錯誤しながら、<br/>
                    職場に適応できるようがんばりました。<br/>
                    そして少しずつですが、変わっていきました。
                    </p>
                </div>
            </section>

            <section className="message-3 layout-1 gap-l">
                <div className="gradient"></div>
                <div className="spark p72"></div>
                {device === "pc" && 
                    <div>
                        <p className="text-align-ct">
                            人に誤解されないように、人の気を悪くしないように、<br/>
                            場の雰囲気をぶち壊さないように、<br/>
                            自分の行動を少しずつコントロールしていけるように…<br/>
                            でも、これって、自分らしくない。自分らしくないんです。<br/><br/>

                            少しは生きやすくなりましたが、<br/>
                            「○○しないように」なんて生きる人生、やっぱり何か違うと思うんです。<br/>
                        </p>
                    
                        <div className="p-title mb-m text-align-ct"><span className="color-gray">私は</span>方向性を変える<span className="color-gray">ことにしました。</span></div>
                        <p className="text-align-ct">
                            できないことはそこそこにして、自分ができることで生きていく<br/>という選択肢を取ることにしたのです。
                        </p>
                    </div>
                }
                {device === "mb" && 
                    <div>
                        <p className="text-align-ct">
                            人に誤解されないように、<br/>人の気を悪くしないように、<br/>
                            場の雰囲気をぶち壊さないように、<br/>
                            自分の行動を少しずつコントロールしていけるように…<br/><br/>
                            でも、これって、自分らしくない。<br/>自分らしくないんです。<br/><br/>

                            少しは生きやすくなりましたが、<br/>
                            「○○しないように」なんて生きる人生、<br/>
                            やっぱり何か違うと思うんです。<br/><br/>
                        </p>
                        <div className="p-title mb-m text-align-ct"><span className="color-gray">私は</span>方向性を変える<br/><span className="color-gray">ことにしました。</span></div>
                        <p className="text-align-ct">
                            できないことはそこそこにして、<br/>自分ができることで生きていく<br/>という選択肢を取ることにしたのです。
                        </p>
                    </div>
                }
            </section>

            <section className="message-5 flex-row">
                <div className="gradient"></div>

                <div className="left-wrapper">
                    <div className="p-title"><span className="color-gray">私と一緒に、本当にやりたいこと、</span><br/>なりたい自分<span className="color-gray">を発見しませんか？</span></div>
                    <a href='/program'>
                        <button className="primary mt-xl">コースを見る</button>
                    </a>
                </div>
                <div className="right-wrapper">
                    <div className="flex-row-start gap-xl">
                        <div data-aos="fade-right">
                        <div className="spark p72"></div>
                        </div>
                        <p>
                        そして最終的に、<br/>
                        自分の特性を活かし、人生を動かしていく方法を<br/>
                        身に着けました。
                        <br/><br/>
                        過去の私と同じように悩んでいるあなたのお気持ち、<br/>
                        よくわかります。
                        <br/><br/>
                        もしあなたが、自分を変えたい、<br/>
                        自分の能力を活かして働きたい、<br/>
                        と考えているのなら、<br/>
                        ぜひ、私のところへいらしてください。
                        </p>
                    </div>
                </div>
            </section>
            <section className="message-6 flex-row">
                <div className="img-wrapper">
                    <div className="spark-p756"></div>
                </div>
                <div className="content-wrapper">
                    <div className="p-title mb-base">今なら変われます！</div>
                    <p>
                    気づいた今が、動くときです。<br/>
                    integral youのプログラムでは、<br/>
                    １．あなたの悩みを整理し、<br/>
                    ２．現状を把握したうえで、<br/>
                    ３．あなたの持つ価値観を掘り当て、<br/>
                    ４．叶えたい未来のヴィジョンを描き、<br/>
                    ５．心の障害を取り除いていきます。<br/>
                    integral youと一緒に、心の殻を破り、<br/>
                    本当にやりたいこと、<br/>
                    なりたい自分を実現しませんか？ 
                    </p>
                    <a href='/program'>
                        <button className="primary mt-xl">コースを見る</button>
                    </a>
                </div>
            </section>
        </div>
    )
}