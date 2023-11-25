import React, { useEffect } from "react";

import ContactForm from "../../components/ContactForm";

export default function ContactPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="contact layout-1 pt-150">
            <ContactForm/>
        </div>
    )
}