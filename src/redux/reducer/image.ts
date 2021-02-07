import Action from "../action";
import Image from "../../type/Image";
import {SET_IMAGES} from "../action/image";
import ImageState from "../state/image";

const setImages = (state: ImageState, action: Action<Image[]>) => {
    return [
        ...state,
        ...action.payload
    ];
};

const ImageReducer = (state: ImageState = [], action: Action<unknown>) => {
    switch (action.type) {
        case SET_IMAGES: return setImages(state, action as Action<Image[]>);
        default: return state;
    }
};

export default ImageReducer;