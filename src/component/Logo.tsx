import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

type LogoProps = {
    name: string;
    logoURL: string;
    version?: string;
};

const Logo = (props: LogoProps) => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
            <img alt={props.name} src={props.logoURL} height={"70vh"}/>
            {props.version && <Typography variant={"caption"} color={"secondary"}>{props.version}</Typography>}
        </Box>
    );
};

export default Logo;