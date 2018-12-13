import React from 'react'
import Events1 from "../components/events_1";
import Events2 from "../components/events_2";

export default class DefaultConcert extends React.Component{
    render() {
        return(
            <div>
                <Events1 />
                <Events2 />
            </div>

        );
    }
}