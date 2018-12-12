import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer-area">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"/> by <a href="https://nurba47@gmail.com">KNA</a>
                                </p>
                            </div>
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
