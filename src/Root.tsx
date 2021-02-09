import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Turrium from "./container/Turrium";
import Login from "./container/Login";
import {isAuthUserSignedIn, signOutAuthUser} from "./service/auth";

const Root = () => {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(isAuthUserSignedIn());
    const signOut = () => { signOutAuthUser().then(() => setIsSignedIn(false));};

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>{isSignedIn ? <Turrium signOut={signOut}/> : <Redirect to={"/login"} />}</Route>
                <Route exact path={'/login'}>{!isSignedIn ? <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/> : <Redirect to={"/"} />}</Route>
            </Switch>
        </Router>
    );
};

export default Root;