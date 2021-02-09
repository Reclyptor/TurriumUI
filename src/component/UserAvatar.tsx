import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {Box, Button, Menu, MenuItem} from "@material-ui/core";

type UserAvatarProps = {
    name: string;
    imgSrc: string;
    signOut(): void;
}

const UserAvatar = (props: UserAvatarProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        handleClose();
        props.signOut();
    };

    return (
        <div>
            <Button onClick={handleMenu}>
                <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} alignContent={"center"}>
                    <Avatar style={{marginRight: '10px'}} alt={props.name} src={props.imgSrc}/>
                    <Typography noWrap display={"block"} variant={"button"}>{props.name}</Typography>
                </Box>
            </Button>
            <Menu keepMounted anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserAvatar;