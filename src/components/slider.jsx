import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <section className="hero-area">
                <div className="hero-slides owl-carousel">
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        <div className="slide-img bg-img" style= {{backgroundImage: 'url(./images/bg-img/bg-1.jpg)'}}> </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                        <h2 data-animation="fadeInUp" data-delay="300ms">Beyond
                                            Time <span>Beyond Time</span></h2>
                                        <a data-animation="fadeInUp" data-delay="500ms" href="!#" className="btn oneMusic-btn mt-50">Discover <i className="fa fa-angle-double-right"> </i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-hero-slide d-flex align-items-center justify-content-center">

                        <div className="slide-img bg-img" style={{backgroundImage: 'url()'}}> </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                        <h2 data-animation="fadeInUp" data-delay="300ms">Music <span> Music</span></h2>
                                        <a data-animation="fadeInUp" data-delay="500ms" href="!#"
                                           className="btn oneMusic-btn mt-50">Discover <i className="fa fa-angle-double-right"> </i></a>
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
export default Slider;