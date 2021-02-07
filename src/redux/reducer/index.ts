import ImageReducer from "./image";
import {combineReducers} from "redux";
import VideoReducer from "./video";
import AlbumReducer from "./album";

const RootReducer = combineReducers({
    albums: AlbumReducer,
    images: ImageReducer,
    videos: VideoReducer
});

export default RootReducer;