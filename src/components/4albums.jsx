import React from 'react'

import ADD3 from '../image/bg-img/add3.gif'

export default class Falbums extends React.Component{
    render() {
        return(
            <div className="add-area mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="adds">
                                <a href="#"><img src={ADD3} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}