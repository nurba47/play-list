import React from 'react'
import Firstalbum from "../components/firstalbum";
import Second_albums from "../components/second_albums";
import Thirdalbums from "../components/third_albums";
import Falbums from "../components/4albums";
import Fialbums from "../components/5albums";
import Contact from "../components/contact";


export default class DefaultAlbumsnew extends React.Component{
    render() {
        return(
            <div>
                <Firstalbum />
                <Second_albums />
                <Thirdalbums/>
                <Falbums />
                <Fialbums/>
                <Contact/>
            </div>
        );
    }
}