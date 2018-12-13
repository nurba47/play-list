import React from 'react'
import { Route, Switch } from "react-router";

import DefaultScene from "../scenes/landing";
import Albums from "../scenes/albums_new";

const DefaultRoutes = () => (
    <Switch>
        <Route exact path="/" component={DefaultScene} />
        <Route exact="./" component={Albums}/>
    </Switch>

);
export default DefaultRoutes;