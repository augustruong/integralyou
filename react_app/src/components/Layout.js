import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const Layout = (Component) => (
    <>
        <Header />
            <Component />
        <Footer />
    </>
  )

export default Layout