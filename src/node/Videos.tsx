import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../redux/state";
import {getVideos} from "../service/turrium";
import Video from "../type/Video";
import VideoGrid from "../component/VideoGrid";
import {setVideos} from "../redux/action/video";

type VideosProps = {
    videos: Video[];
    submitSetVideos(_: Video[]): void;
};

const ConnectedVideos = (props: VideosProps) => {
    const loadVideos= () => {
        if (props.videos.length === 0) {
            getVideos().then(videos => props.submitSetVideos(videos));
        }
    }

    useEffect(loadVideos, [props.videos.length]);

    return (
        <VideoGrid videos={props.videos} />
    );
};

const mapStateToProps = (state: State) => {
    return {
        videos: state.videos || []
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submitSetVideos: (videos: Video[]) => dispatch(setVideos(videos))
    };
};

const Videos = connect(mapStateToProps, mapDispatchToProps)(ConnectedVideos);
export default Videos;