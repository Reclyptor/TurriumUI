import axios, { AxiosResponse } from 'axios';
import Image from "../type/Image";
import Album from "../type/Album";
import Video from "../type/Video";

export const getImages = (): Promise<Image[]> => {
    return axios.create({})
        .get(`${process.env.REACT_APP_TURRIUM_HOST}/api/v1/images`, {})
        .then((response: AxiosResponse<Image[]>) => response.data);
};

export const getAlbums = (): Promise<Album[]> => {
    return axios.create({})
        .get(`${process.env.REACT_APP_TURRIUM_HOST}/api/v1/albums`, {})
        .then((response: AxiosResponse<Album[]>) => response.data);
};

export const getVideos = (): Promise<Video[]> => {
    return axios.create({})
        .get(`${process.env.REACT_APP_TURRIUM_HOST}/api/v1/videos`, {})
        .then((response: AxiosResponse<Video[]>) => response.data);
};