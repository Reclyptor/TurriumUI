import React, {ReactNode} from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

type NavBarOptionProps = {
    icon: ReactNode;
    name: string;
    action(): void;
};

const NavBarOption = (props: NavBarOptionProps) => {
    return (
        <ListItem button key={props.name} onClick={props.action}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem>
    );
};

export default NavBarOption;