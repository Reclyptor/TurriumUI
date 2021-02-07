import Album from "../../type/Album";
import Action from "./index";

export const SET_ALBUMS = "SET_ALBUMS";

export const setAlbums = (albums: Album[]): Action<Album[]> => {
    return {
        type: SET_ALBUMS,
        payload: albums
    }
};