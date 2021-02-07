import Action from "../action";
import Video from "../../type/Video";
import {SET_VIDEOS} from "../action/video";
import VideoState from "../state/video";

const setVideos = (state: VideoState, action: Action<Video[]>) => {
    return [
        ...state,
        ...action.payload
    ];
};

const VideoReducer = (state: VideoState = [], action: Action<unknown>) => {
    switch (action.type) {
        case SET_VIDEOS: return setVideos(state, action as Action<Video[]>);
        default: return state;
    }
};

export default VideoReducer;