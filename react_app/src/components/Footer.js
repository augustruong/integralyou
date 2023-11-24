import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css'

export default function Footer() {
    return(
        <footer>
            <div className='body'>
                <div className='inner'>
                    <div className='tags-wrapper'>
                        <div className='label'>TAGS</div>
                        <div className='tags-list'>
                            <div className='tagname'>大人の発達障害</div>
                            <div className='tagname'>ADHD</div>
                            <div className='tagname'>キャリア</div>
                            <div className='tagname'>自分探し</div>
                            <div className='tagname'>自分迷子</div>
                            <div className='tagname'>ミッション</div>
                            <div className='tagname'>就活</div>
                            <div className='tagname'>転職</div>
                            <div className='tagname'>やりたいこと</div>
                            <div className='tagname'>起業女子</div>
                            <div className='tagname'>個人事業主</div>
                        </div>
                    </div>
                    <div className='sns-wrapper'>
                        <div className='label'>FOLLOW ME ON SNS</div>
                        <div className='sns-list'>
                            <NavLink to='https://www.instagram.com/yu.jaeng.i/' target='_blank'>
                                <img src={process.env.PUBLIC_URL + `/img/sns/Instagram_Logo.png`}/>
                            </NavLink>
                            <NavLink to='https://ameblo.jp/integralyou/' target='_blank'>
                                <img src={process.env.PUBLIC_URL + `/img/sns/Ameba_Logo.png`}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='policy flex-row-ct'>
                    <NavLink to='/'>利用規約</NavLink>
                    <NavLink to='/'>個人情報保護方針</NavLink>
                    <NavLink to='/'>サービスポリシー</NavLink>
                </div>
            </div>
            <div className='copyright'>Copyright © 2021 integral you. All Rights Reserved.</div>
        </footer>
    )
}