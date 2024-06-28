import React, { useState } from "react";
import axios from "axios";
import words from "../words";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './Form.css'

export default function SubscribeForm(){
    const [succeed,setSucceed] = useState(false);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const initialValues = {
        lastname: "",
        firstname: "",
        email: ""
      };

    const subscribeSchema = Yup.object().shape({
        email: Yup.string().email().required(words.validation.mandatoryError),
    });

    const handleSubmit = (values) => {
        axios.post(words.api.admin.subscriber.add, values).then(function(response){
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
            validationSchema={subscribeSchema} 
            onSubmit={(values,{resetForm}) => { setLoading(true); handleSubmit(values); resetForm()}}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <div className="newsletter-form">
                        <header className="header">
                            <div className="p-title">newsletter</div>
                            <p className="text-align-ct mt-base">Eメールアドレスを登録すると、{window.innerWidth < 768 ? <br/> : ""}毎週ニュースや最新情報が届きます。</p>
                        </header> 
                        {(!succeed && !error && !loading) &&
                            <Form className="body flex-column gap-s mx-auto">
                                <div className="form-row flex-row-start gap-s">
                                    <div>
                                        {/* <label htmlFor="lastname" className="mandatory">氏</label> */}
                                        <Field type="text" name="lastname" id="lastname" placeholder="氏: すずき" className={errors.lastname && touched.lastname ? "input-error" : null}/>
                                        <ErrorMessage name="lastname" component="span" className="error" />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="firstname" className="mandatory">名</label> */}
                                        <Field type="text" name="firstname" id="firstname" placeholder="名: めい" className={errors.firstname && touched.firstname ? "input-error" : null}/>
                                        <ErrorMessage name="firstname" component="span" className="error" />
                                    </div>
                                </div>
                                <div className="form-row w-100pc">
                                    {/* <label htmlFor="email" className="mandatory">メールアドレス</label> */}
                                    <Field type="email" name="email" id="email" placeholder="メールアドレス: suzuki.mei@gmail.com" 
                                           className={errors.email && touched.email ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="email" component="span" className="error" />
                                </div>
                                    
                                <button type="submit" name="add" className="primary">登録</button>
                            </Form>
                        }
                        {succeed &&
                            <div className="actMsg mb-w-100pc px-5pc py-m" data-aos="flip-right">
                                <div className="flex-column-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/i-check.svg`} style={{width:"64px"}}/>
                                    <p className="text-align-ct">ご登録いただきありがとうございました!</p>
                                </div>
                                <button name="back" className="mt-base" onClick={() => setSucceed(false)}>フォームに戻る</button>
                            </div>
                        }
                        {error &&
                            <div className="actMsg mb-w-100pc px-5pc py-m" data-aos="flip-right">
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