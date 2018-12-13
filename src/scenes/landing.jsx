import React from 'react'

import Slider from '../components/slider'
import Albums from "../components/albums";
import Buy from "../components/buy";
import News from "../components/news";
import Musicell from "../components/musicell";
import Contact from "../components/contact";

export default class DefaultScene extends React.Component {
    render() {
        return (
            <div>
                <Slider />
                <Albums />
                <Buy />
                <News />
                <Musicell />
                <Contact />
            </div>
        )
    }
}