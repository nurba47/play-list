import React from 'react';
import Logo from './logo.png'

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer-area">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-12 col-md-6">
                            <a href="!#"><img src={Logo} alt="#!"/> </a>
                            <p className="copywrite-text"> <a href="!#">
                                Copyright &copy; </a>
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"> </i> by <a href="https://nurba47.github.io/index.html">KNA studio</a>
                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="footer-nav">
                                <ul>
                                    <li><a href="!#">Home</a></li>
                                    <li><a href="!#">Albums</a></li>
                                    <li><a href="!#">Events</a></li>
                                    <li><a href="!#">News</a></li>
                                    <li><a href="!#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
