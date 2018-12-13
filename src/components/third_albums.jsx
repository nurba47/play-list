import React from 'react'

import B1 from '../image/bg-img/b1.jpg'
import B2 from '../image/bg-img/b2.jpg'
import B3 from '../image/bg-img/b3.jpg'
import B4 from '../image/bg-img/b4.jpg'

export default class Thirdalbums extends React.Component{

    render() {
        return(
            <div className="oneMusic-buy-now-area mb-100">
                <div className="container">
                    <div className="row">


                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-album-area">
                                <div className="album-thumb">
                                    <img src={B1} alt=""/>

                                        <div className="album-price">
                                            <p>$0.90</p>
                                        </div>

                                        <div className="play-icon">
                                            <a href="!#" className="video--play--btn">
                                                <span className="icon-play-button"> </span>
                                            </a>
                                        </div>
                                </div>
                                <div className="album-info">
                                    <a href="!#">
                                        <h5>Garage Band</h5>
                                    </a>
                                    <p>Radio Station</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-album-area">
                                <div className="album-thumb">
                                    <img src={B2} alt=""/>
                                </div>
                                <div className="album-info">
                                    <a href="!#">
                                        <h5>Noises</h5>
                                    </a>
                                    <p>Buble Gum</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-album-area">
                                <div className="album-thumb">
                                    <img src={B3} alt=""/>
                                </div>
                                <div className="album-info">
                                    <a href="!#">
                                        <h5>Jess Parker</h5>
                                    </a>
                                    <p>The Album</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-album-area">
                                <div className="album-thumb">
                                    <img src={B4} alt=""/>
                                </div>
                                <div className="album-info">
                                    <a href="!#">
                                        <h5>Noises</h5>
                                    </a>
                                    <p>Buble Gum</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="load-more-btn text-center">
                                <a href="!#" className="btn oneMusic-btn">Load More <i className="fa fa-angle-double-right"> </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}