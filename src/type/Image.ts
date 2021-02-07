type Image = {
    id: string;
    timestamp: string;
    size: number;
    width: number;
    height: number;
    hidden: boolean;
    type: string;
    sha1: string;
    filename: string;
    url: string;
    caption: string;
    tags: string[];
};

export default Image;