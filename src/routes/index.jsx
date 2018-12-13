import React from 'react'
import { Route, Switch } from "react-router";

import DefaultScene from "../scenes/landing";
import DefaultAlbums from "../scenes/albums_new";
import DefaultConcert from "../scenes/concert";

const DefaultRoutes = () => (
    <Switch>
        <Route exact path="/" component={DefaultScene} />
        <Route exact="./" component={DefaultAlbums}/>
        <Route exact="./" component={DefaultConcert}/>
    </Switch>

);
export default DefaultRoutes;