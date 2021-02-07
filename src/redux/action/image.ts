import Image from "../../type/Image";
import Action from "./index";

export const SET_IMAGES = "SET_IMAGES";

export const setImages = (images: Image[]): Action<Image[]> => {
    return {
        type: SET_IMAGES,
        payload: images
    }
};