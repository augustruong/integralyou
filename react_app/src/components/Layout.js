import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const Layout = (Component) => (
    <>
        <Header />
            <a className="news-icon" href='/news'>
                <img src={process.env.PUBLIC_URL + `/img/icon/news.svg`}/>
                <div className="text">お知らせ</div>   
            </a>
            <Component />
        <Footer />
    </>
  )

export default Layout