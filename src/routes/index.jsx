import React from 'react'
import { Route, Switch } from "react-router";

import DefaultScene from "../scenes/landing";

const DefaultRoutes = () => (
    <Switch>
        <Route exact path="/" component={DefaultScene} />
    </Switch>

);
export default DefaultRoutes;