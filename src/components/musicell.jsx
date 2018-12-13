import React from 'react';

import WT1 from '../image/bg-img/wt1.jpg'
import WT2 from '../image/bg-img/wt2.jpg'
import WT3 from '../image/bg-img/wt3.jpg'
import WT4 from '../image/bg-img/wt4.jpg'
import WT5 from '../image/bg-img/wt5.jpg'
import WT6 from '../image/bg-img/wt6.jpg'
import WT7 from '../image/bg-img/wt7.jpg'
import WT8 from '../image/bg-img/wt8.jpg'
import WT9 from '../image/bg-img/wt9.jpg'
import WT10 from '../image/bg-img/wt10.jpg'
import WT11 from '../image/bg-img/wt11.jpg'
import WT12 from '../image/bg-img/wt12.jpg'
import P1 from '../image/bg-img/pa1.jpg'
import P2 from '../image/bg-img/pa2.jpg'
import P3 from '../image/bg-img/pa3.jpg'
import P4 from '../image/bg-img/pa4.jpg'
import P5 from '../image/bg-img/pa5.jpg'
import P6 from '../image/bg-img/pa6.jpg'
import P7 from '../image/bg-img/pa7.jpg'

class Musicell extends React.Component{
    render() {
        return(
            <section className="miscellaneous-area section-padding-100-0">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="weeks-top-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                <p>See what’s new</p>
                                <h2>This week’s top</h2>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="100ms">
                                <div className="thumbnail">
                                    <img src={WT1} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>Sam Smith</h6>
                                    <p>Underground</p>
                                </div>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="150ms">
                                <div className="thumbnail">
                                    <img src={WT2} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>Power Play</h6>
                                    <p>In my mind</p>
                                </div>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="200ms">
                                <div className="thumbnail">
                                    <img src={WT3} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>Cristinne Smith</h6>
                                    <p>My Music</p>
                                </div>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="250ms">
                                <div className="thumbnail">
                                    <img src={WT4} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>The Music Band</h6>
                                    <p>Underground</p>
                                </div>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="300ms">
                                <div className="thumbnail">
                                    <img src={WT5} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>Creative Lyrics</h6>
                                    <p>Songs and stuff</p>
                                </div>
                            </div>


                            <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="350ms">
                                <div className="thumbnail">
                                    <img src={WT6} alt=""/>
                                </div>
                                <div className="content-">
                                    <h6>The Culture</h6>
                                    <p>Pop Songs</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="new-hits-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                <p>See what’s new</p>
                                <h2>New Hits</h2>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="100ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT7} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>Sam Smith</h6>
                                        <p>Underground</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="150ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT8} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>Power Play</h6>
                                        <p>In my mind</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="200ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT9} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>Cristinne Smith</h6>
                                        <p>My Music</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="250ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT10} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>The Music Band</h6>
                                        <p>Underground</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="300ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT11} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>Creative Lyrics</h6>
                                        <p>Songs and stuff</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>


                            <div
                                className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                data-wow-delay="350ms">
                                <div className="first-part d-flex align-items-center">
                                    <div className="thumbnail">
                                        <img src={WT12} alt=""/>
                                    </div>
                                    <div className="content-">
                                        <h6>The Culture</h6>
                                        <p>Pop Songs</p>
                                    </div>
                                </div>
                                <audio preload="auto" controls>
                                    <source src="audio/dummy-audio.mp3"/>
                                </audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="popular-artists-area mb-100">
                            <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                <p>See what’s new</p>
                                <h2>Popular Artist</h2>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="100ms">
                                <div className="thumbnail">
                                    <img src={P1} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>Sam Smith</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="150ms">
                                <div className="thumbnail">
                                    <img src={P2} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>William Parker</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="200ms">
                                <div className="thumbnail">
                                    <img src={P3} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>Jessica Walsh</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="250ms">
                                <div className="thumbnail">
                                    <img src={P4} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>Tha Stoves</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="300ms">
                                <div className="thumbnail">
                                    <img src={P5} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>DJ Ajay</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="350ms">
                                <div className="thumbnail">
                                    <img src={P6} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>Radio Vibez</p>
                                </div>
                            </div>


                            <div className="single-artists d-flex align-items-center wow fadeInUp"
                                 data-wow-delay="400ms">
                                <div className="thumbnail">
                                    <img src={P7} alt=""/>
                                </div>
                                <div className="content-">
                                    <p>Music 4u</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}
export default Musicell;