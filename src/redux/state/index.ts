import Album from "../../type/Album";
import Image from "../../type/Image";
import Video from "../../type/Video";

type State = {
    albums?: Album[]
    images?: Image[]
    videos?: Video[]
};

export default State;