import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../component/Copyright";
import {isAuthUserSignedIn} from "../service/auth";
import Turrium from "./Turrium";
import {Redirect} from "react-router-dom";
import GoogleLoginButton from "../component/GoogleLoginButton";
import packageJSON from '../../package.json';
import moon from '../resource/moon.svg';
import MiniLogo from "../component/MiniLogo";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loginButton: {
        marginTop: theme.spacing(0.5)
    }
}));

type LoginProps = {
    isSignedIn: boolean;
    setIsSignedIn(_: boolean): void;
};

const Login = (props: LoginProps) => {
    const classes = useStyles();

    return (
        props.isSignedIn ? <Redirect to={"/"} /> :
            <Container id="test" component="main" maxWidth="xs">
                <CssBaseline />
                <MiniLogo name={packageJSON.name} logoURL={moon} title={packageJSON.title} />
                <div className={classes.paper}>
                    <Typography color={"textSecondary"} variant={"caption"}>
                        Sign in with your Google account.
                    </Typography>
                    <div className={classes.loginButton}>
                        <GoogleLoginButton onSuccess={() => props.setIsSignedIn(true)} onFailure={() => props.setIsSignedIn(false)} />
                    </div>
                </div>
                <Box mt={8}>
                    <Copyright name={"Turrium"} url={"https://www.turrium.com"}/>
                </Box>
            </Container>
    );
};

export default Login;