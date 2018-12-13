import React from 'react'

import S1 from '../image/bg-img/s1.jpg'
import S2 from '../image/bg-img/s2.jpg'
import S3 from '../image/bg-img/s3.jpg'
import S4 from '../image/bg-img/s4.jpg'

export default class Fialbums extends React.Component{
    render() {
        return (
            <div className="one-music-songs-area mb-70">
                <div className="container">
                    <div className="row">


                        <div className="col-12">
                            <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                                <div className="song-thumbnail">
                                    <img src={S1} alt=""/>
                                </div>
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


                        <div className="col-12">
                            <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                                <div className="song-thumbnail">
                                    <img src={S2} alt=""/>
                                </div>
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


                        <div className="col-12">
                            <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                                <div className="song-thumbnail">
                                    <img src={S3} alt=""/>
                                </div>
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


                        <div className="col-12">
                            <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                                <div className="song-thumbnail">
                                    <img src={S4} alt=""/>
                                </div>
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
            </div>
        );
    }
}