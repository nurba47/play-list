import React from 'react'

import Slider from '../components/slider'
import Albums from "../components/albums";

export default class DefaultScene extends React.Component {
    render() {
        return (
            <div>
                <Slider/>
                <Albums/>
            </div>
        )
    }
}