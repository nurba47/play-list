import React from 'react'

import FA from '../image/bg-img/fa.jpg'

class News extends React.Component {
    render() {
        return (
            <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed"
                     style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="featured-artist-thumb">
                                <img src={FA} alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="featured-artist-content">

                                <div className="section-heading white text-left mb-30">
                                    <p>See what’s new</p>
                                    <h2>Buy What’s New</h2>
                                </div>
                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam
                                    varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse
                                    eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac,
                                    dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non
                                    eros.</p>
                                <div className="song-play-area">
                                    <div className="song-name">
                                        <p>01. Main Hit Song</p>
                                    </div>
                                    <audio preload="auto" controls>
                                        <source src="audio/dummy-audio.mp3"/>
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default News;