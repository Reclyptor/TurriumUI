import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '20vh auto auto auto',
        border: '#a4c639'
    },
    title: {

    }
});

type MiniLogoProps = {
    name: string;
    logoURL: string;
    title?: string;
};

const MiniLogo = (props: MiniLogoProps) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
                <img alt={props.name} src={props.logoURL} height={"100vh"}/>
                {props.title && <Typography variant={"h4"} align={'center'} color={"secondary"}>{props.title}</Typography>}
            </Box>
        </div>
    );
};

export default MiniLogo;