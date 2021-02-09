import React, {useEffect} from 'react';
import {isAuthUserSignedIn, signOutAuthUser} from "../service/auth";

type GoogleLoginButtonProps = {
    onSuccess(): void;
    onFailure(): void;
}

const GoogleLoginButton = (props: GoogleLoginButtonProps) => {
    const onSuccess = (googleUser: gapi.auth2.GoogleUser) => {
        console.log(`Logged in as: ${googleUser.getBasicProfile().getName()}.`);
        props.onSuccess();
    }

    const onFailure = (error: unknown) => {
        console.log(error);
        props.onFailure();
    };

    const renderButton = () => {
        if (document.getElementById("g-signin2")) {
            if (window.gapi?.signin2) {
                window.gapi.signin2.render('g-signin2', {
                    'scope': 'profile email',
                    'width': 190,
                    'height': 30,
                    'longtitle': false,
                    'theme': 'light',
                    'onsuccess': onSuccess,
                    'onfailure': onFailure
                });
            }
        }
    };

    useEffect(renderButton);

    return <div id={"g-signin2"} className={"g-signin2"} data-onsuccess={"onSignIn"}/>;
};

export default GoogleLoginButton;