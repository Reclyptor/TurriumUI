import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../redux/state";
import Image from "../type/Image";
import {getImages} from "../service/turrium";
import ImageGrid from "../component/ImageGrid";
import {setImages} from "../redux/action/image";

type ImagesProps = {
    images: Image[];
    submitSetImages(_: Image[]): void;
};

const ConnectedImages = (props: ImagesProps) => {
    const loadImages = () => {
        if (props.images.length === 0) {
            getImages().then(images => props.submitSetImages(images));
        }
    }

    useEffect(loadImages, [props.images.length]);

    return (
        <ImageGrid images={props.images} />
    );
};

const mapStateToProps = (state: State) => {
    return {
        images: state.images || []
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submitSetImages: (images: Image[]) => dispatch(setImages(images))
    };
};

const Images = connect(mapStateToProps, mapDispatchToProps)(ConnectedImages);
export default Images;