import Image from "./Image";
import Video from "./Video";

type Album = {
    id: string;
    name: string;
    hidden: boolean;
    description: string;
    tags: string[];
    images: Image[];
    videos: Video[];
};

export default Album;