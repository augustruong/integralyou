import React, { useState } from "react";
import axios from "axios";
import words from "../words";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './Form.css'

export default function ContactForm(){
    const [succeed,setSucceed] = useState(false);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const initialValues = {
        lastname: "",
        firstname: "",
        email: "",
        phone: "",
        title: "",
        message: ""
      };

    const contactSchema = Yup.object().shape({
        lastname: Yup.string().required(words.validation.mandatoryError),
        firstname: Yup.string().required(words.validation.mandatoryError),
        email: Yup.string().email().required(words.validation.mandatoryError),
        phone: Yup.string().matches(/^[0-9]+$/, words.validation.numberError),
        title: Yup.string().required(words.validation.mandatoryError),
        message: Yup.string().required(words.validation.mandatoryError)
    });

    const handleSubmit = (values) => {
        axios.post(words.api.admin.letter.add, values).then(function(response){
            setLoading(false);
            setSucceed(true);
        }).catch(error => { 
            setLoading(false);
            setError(true)
        }) 
    }

    return(
        <Formik 
                initialValues={initialValues} 
                validationSchema={contactSchema} 
                onSubmit={(values,{resetForm}) => { setLoading(true); handleSubmit(values); resetForm()}}
            >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div className="contact-form max-w-900 px-7pc text-align-ct">
                        <div className="header text-align-ct mb-xl">
                            <div className="p-title mx-s">{words.terms.contact.titleJP}</div>
                            <div className="en-title mb-l">{words.terms.contact.titleEN}</div>

                            <div className="spark p24 mb-m"></div>
                            <p className="text-align-ct">お問い合わせやご質問は、下記のフォームをご利用いただくか、
                                {window.innerWidth > 640 ? <br/> : ""}
                                直接 <span className="color-primary-pink">intergralyou@...</span>までメールにてご連絡ください。
                            </p>
                        </div>    
                        {(!succeed && !error && !loading) &&
                            <Form className="body flex-column gap-s mx-auto">
                                <div className="form-row flex-row-start gap-s">
                                    <div>
                                        <label htmlFor="lastname" className="mandatory">氏</label>
                                        <Field type="text" name="lastname" id="lastname" placeholder="すずき" className={errors.lastname && touched.lastname ? "input-error" : null}/>
                                        <ErrorMessage name="lastname" component="span" className="error" />
                                    </div>
                                    <div>
                                        <label htmlFor="firstname" className="mandatory">名</label>
                                        <Field type="text" name="firstname" id="firstname" placeholder="めい" className={errors.firstname && touched.firstname ? "input-error" : null}/>
                                        <ErrorMessage name="firstname" component="span" className="error" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email" className="mandatory">メールアドレス</label>
                                    <Field type="email" name="email" id="email" placeholder="suzuki.mei@gmail.com" className={errors.email && touched.email ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="email" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phone">電話番号</label>
                                    <Field type="text" name="phone" id="phone" placeholder="070-1234-5678"　className={errors.phone && touched.phone ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="phone" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="title" className="mandatory">タイトル</label>
                                    <Field type="text" name="title" id="title" placeholder="メッセージのタイトル"　className={errors.title && touched.title ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="title" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message" className="mandatory">メッセージ</label>
                                    <Field  as="textarea"  type="text" name="message" id="message" placeholder="メッセージの内容"　className={errors.message && touched.message ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="message" component="span" className="error" />
                                </div>
                                <button type="submit" className={"primary"} >メッセージを送る</button>
                            </Form>
                        }
                        {succeed &&
                            <div className="actMsg mb-w-100pc px-5pc py-m" >
                                <div className="flex-column-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-check.svg`} style={{width:"64px"}}/>
                                    <p className="text-align-ct">メッセージを送りました。<br/>
                                    どうもありがとうございます。</p>
                                </div>
                                <button name="back" className="mt-base" onClick={() => setSucceed(false)}>フォームに戻る</button>
                            </div>
                        }
                        {error &&
                            <div className="actMsg mb-w-100pc px-5pc py-m">
                                <div className="flex-column-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-times.svg`} style={{width:"64px"}}/>
                                    <p className="text-align-ct">エラーが発生しました。<br/>
                                    インターネット接続を確認してください。</p>
                                </div>
                                <button name="back" className="mt-base" onClick={() => setError(false)}>フォームに戻る</button>
                            </div>
                        }
                        {loading &&
                        <div className="loading-wrapper">
                            <div className="spark p42 mb-base"></div>
                            <div>Loading...</div>
                        </div>
                        }
                    </div>
                );
            }}
            </Formik>
    )
}