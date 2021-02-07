import Action from "../action";
import Album from "../../type/Album";
import {SET_ALBUMS} from "../action/album";
import AlbumState from "../state/album";

const setAlbums = (state: AlbumState, action: Action<Album[]>) => {
    return [
        ...state,
        ...action.payload
    ];
};

const AlbumReducer = (state: AlbumState = [], action: Action<unknown>) => {
    switch (action.type) {
        case SET_ALBUMS: return setAlbums(state, action as Action<Album[]>);
        default: return state;
    }
};

export default AlbumReducer;