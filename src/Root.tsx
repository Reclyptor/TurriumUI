import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Turrium from "./container/Turrium";
import SignIn from "./container/SignIn";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}><Turrium /></Route>
                <Route path={'/signin'}><SignIn /></Route>
            </Switch>
        </Router>
    );
};

export default Root;