import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../redux/state";
import {getAlbums} from "../service/turrium";
import Album from "../type/Album";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import {ListItem} from "@material-ui/core";
import {setAlbums} from "../redux/action/album";

type AlbumsProps = {
    albums: Album[];
    submitSetAlbums(_: Album[]): void;
};

const ConnectedAlbums = (props: AlbumsProps) => {
    const loadAlbums = () => {
        if (props.albums.length === 0) {
            getAlbums().then(albums => props.submitSetAlbums(albums));
        }
    }

    useEffect(loadAlbums, [props.albums.length]);

    return (
        <List>
            {props.albums.map(album => <ListItem><Typography>{album.name}</Typography></ListItem>)}
        </List>
    );
};

const mapStateToProps = (state: State) => {
    return {
        albums: state.albums || []
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submitSetAlbums: (albums: Album[]) => dispatch(setAlbums(albums))
    };
};

const Albums = connect(mapStateToProps, mapDispatchToProps)(ConnectedAlbums);
export default Albums;