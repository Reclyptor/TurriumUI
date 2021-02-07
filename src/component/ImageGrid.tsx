import React, {useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Image from "../type/Image";
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

type ImageGridProps = {
    images: Image[]
}

const ImageGrid = (props: ImageGridProps) => {
    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState<Image>();

    const clearSelectedImage = () => {
        setSelectedImage(undefined);
    }

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={5}>
                {props.images
                    .map(image => (
                        <GridListTile key={image.id} cols={1} onClick={() => setSelectedImage(image)}>
                            <img src={image.url} alt={image.filename} />
                        </GridListTile>
                    ))}
            </GridList>
            {
                selectedImage &&
                <Modal close={clearSelectedImage}>
                    <img src={selectedImage.url} alt={selectedImage.filename} onClick={clearSelectedImage}/>
                </Modal>
            }
        </div>
    );
};

export default ImageGrid;