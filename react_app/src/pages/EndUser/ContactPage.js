import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'
import words from "../../words";

import './ContactPage.css'


export default function ContactPage(){
    const [inputs, setInputs] = useState([]);
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        axios.post(words.api.admin.letter.add, inputs).then(function(response){
            console.log(response.data);
        });
          
    }
    return(
        <div className="contact layout-1">
            <div className="header">
                <div className="p-title">お問い合わせ</div>
                <div className="spark p24"></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="header">
                    <div>お問い合わせやご質問は、下記のフォームをご利用いただくか、直接 <span className="bold color-primary-pink">intergralyou@...</span>までメールにてご連絡ください。</div>
                </div>    
                <div className="body">
                <div className="flex-row-ct gap-s">
                    <input type="text" id="lname" name="lastname" placeholder="氏" className="half" onChange={handleChange}/>
                    <input type="text" id="fname" name="firstname" placeholder="名" className="half" onChange={handleChange}/>
                </div>
                <input type="email" id="email" name="email" placeholder="メールアドレス" className="full" onChange={handleChange}/>
                <input type="text" id="phone" name="phone" placeholder="電話番号" className="full" onChange={handleChange}/>
                <input type="text" id="subject" name="subject" placeholder="タイトル" className="full" onChange={handleChange}/>
                <textarea type="text" id="message" name="message" placeholder="メッセージ" className="full" onChange={handleChange}/>

                <button type="submit" name="add" className="primary">登録</button>
                </div>
            </form>
            
        </div>
    )
}