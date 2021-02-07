import React, {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Video from "../type/Video";
import Modal from "./Modal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: "hidden",
            margin: -theme.spacing(3)
        },
        gridList: {
            width: "100%",
            height: "100%",
        },
    }),
);

type VideoGridProps = {
    videos: Video[]
}

const VideoGrid = (props: VideoGridProps) => {
    const classes = useStyles();
    const [selectedVideo, setSelectedVideo] = useState<Video>();

    const clearSelectedVideo = () => {
        setSelectedVideo(undefined);
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={5}>
                {props.videos
                    .map(video => (
                        <GridListTile key={video.id} cols={1} onClick={() => setSelectedVideo(video)}>
                            <video src={video.url} width={"100%"} />
                        </GridListTile>
                    ))}
            </GridList>
            {
                selectedVideo &&
                <Modal close={clearSelectedVideo}>
                    <video controls autoPlay src={selectedVideo.url} onClick={clearSelectedVideo} />
                </Modal>
            }
        </div>
    );
};

export default VideoGrid;