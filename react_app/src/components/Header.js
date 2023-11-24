import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../logo.png';

import './Header.css'
import '../App.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            show: true,
            scrollPos: 0
        };
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    closeMobileMenu = () => {
        this.setState({clicked: false})
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.closeMobileMenu);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        if (window.innerWidth <= 960) {
            this.setState({show:true})
        } else {
            this.setState({
                scrollPos: document.body.getBoundingClientRect().top,
                show: document.body.getBoundingClientRect().top > this.state.scrollPos
            })
        }
    }
    render() {
        return(
            <header id='header' className={this.state.show ? "show" : "hidden"}>
                <NavLink to='/' className='logo' onClick={this.handleClick}>
                    <img src={logo} />
                </NavLink>

                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <nav className={this.state.clicked ? 'header__menu active' : 'header__menu'}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <NavLink to='/profile'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>プローフィル</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/message'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>メッセージ</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/program'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu} >プログラム</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/interview'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>インタビュー</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/blog'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>ブログ</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/faq'  className='nav__link' activeClassName="active" onClick={this.closeMobileMenu}>FAQ</NavLink>
                        </li>
                        {window.innerWidth < 1080 &&
                        <li className='nav__item'>
                            <Link to='/contact'>
                                <button>お問い合わせ</button>
                            </Link>
                        </li>
                        }
                    </ul>
                </nav>
                {window.innerWidth >= 1080 &&
                <Link to='/contact'>
                    <button>お問い合わせ</button>
                </Link>
                }
            </header>    
        )
    }
}