import React from 'react';

class Header extends React.Component{
    render() {
        return(
            <header className="header-area">
                <div className="oneMusic-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="oneMusicNav">
                                <a href="#!" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></a>
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler">
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                    </span>
                                </div>
                                <div className="classy-menu">
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap">
                                            <span className="top"> </span>
                                            <span className="bottom"> </span>
                                        </div>
                                    </div>
                                    <div className="classynav">
                                        <ul>
                                            <li><a href="#!">Home</a></li>
                                            <li><a href="#!">Albums</a></li>
                                            <li><a href="#!">Pages</a>
                                                <ul className="dropdown">
                                                    <li><a href="#!">Home</a></li>
                                                    <li><a href="#!">Albums</a></li>
                                                    <li><a href="#!">Events</a></li>
                                                    <li><a href="#!">News</a></li>
                                                    <li><a href="#!">Contact</a></li>
                                                    <li><a href="#!">Elements</a></li>
                                                    <li><a href="#!">Login</a></li>
                                                    <li><a href="#!">Dropdown</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Even Dropdown</a></li>
                                                            <li><a href="#">Even Dropdown</a></li>
                                                            <li><a href="#">Even Dropdown</a></li>
                                                            <li><a href="#">Even Dropdown</a>
                                                                <ul className="dropdown">
                                                                    <li><a href="#">Deeply Dropdown</a></li>
                                                                    <li><a href="#">Deeply Dropdown</a></li>
                                                                    <li><a href="#">Deeply Dropdown</a></li>
                                                                    <li><a href="#">Deeply Dropdown</a></li>
                                                                    <li><a href="#">Deeply Dropdown</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Even Dropdown</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#!">Events</a></li>
                                            <li><a href="#!">News</a></li>
                                            <li><a href="#!">Contact</a></li>
                                        </ul>
                                        <div className="login-register-cart-button d-flex align-items-center">
                                            <div className="login-register-btn mr-50">
                                                <a href="!#" id="loginBtn">Login / Register</a>
                                            </div>
                                            <div className="cart-btn">
                                                <p><span className="icon-shopping-cart"> </span>
                                                    <span className="quantity">1</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}
export default Header;