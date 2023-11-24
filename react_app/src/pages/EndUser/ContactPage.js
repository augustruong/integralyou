import React, { useEffect, useState } from "react";
import axios from "axios";
import words from "../../words";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ContactForm from "../../components/ContactForm";

export default function ContactPage(){
    return(
        <div className="contact layout-1 pt-150">
            <ContactForm/>
        </div>
    )
}