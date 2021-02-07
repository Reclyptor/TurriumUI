import Video from "../../type/Video";
import Action from "./index";

export const SET_VIDEOS = "SET_VIDEOS";

export const setVideos = (videos: Video[]): Action<Video[]> => {
    return {
        type: SET_VIDEOS,
        payload: videos
    }
};