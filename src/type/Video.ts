type Video = {
    id: string;
    timestamp: string;
    size: number;
    length: number;
    hidden: boolean;
    type: string;
    sha1: string;
    filename: string;
    url: string;
    title: string;
    tags: string[];
};

export default Video;