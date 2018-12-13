import React from 'react';

export default class Firstalbum extends React.Component {
    render() {
        return (
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{backgroundImage: 'url(img/bg-img/breadcumb3.jpg)'}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>Latest Albums</h2>
                </div>
            </section>
        );
    }
}