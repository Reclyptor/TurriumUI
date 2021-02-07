import React, {useState} from 'react';
import NavBar from "../component/NavBar";
import AlbumIcon from '@material-ui/icons/PhotoAlbum';
import ImageIcon from '@material-ui/icons/Image';
import VideoIcon from '@material-ui/icons/Movie';
import MediaIcon from '@material-ui/icons/Description';
import UploadIcon from '@material-ui/icons/Publish';
import TagIcon from '@material-ui/icons/LocalOffer';
import SearchIcon from '@material-ui/icons/Search';
import NavBarOption from "../component/NavBarOption";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import logo from "../resource/logo.png";
import LoremIpsum from "./LoremIpsum";
import Images from "../node/Images";
import Albums from "../node/Albums";
import Videos from "../node/Videos";

const Turrium = () => {
    const [node, setNode] = useState(<></>);

    return (
        <NavBar logoURL={logo} content={node}>
            <Typography variant={"overline"} align={"center"}>Navigation</Typography>
            <List>
                <NavBarOption icon={<AlbumIcon/>} name={'Albums'} action={() => setNode(<Albums />)}/>
                <NavBarOption icon={<ImageIcon/>} name={'Images'} action={() => setNode(<Images />)}/>
                <NavBarOption icon={<VideoIcon/>} name={'Videos'} action={() => setNode(<Videos />)}/>
                <NavBarOption icon={<MediaIcon/>} name={'Media'} action={() => setNode(<LoremIpsum/>)}/>
                <NavBarOption icon={<TagIcon/>} name={'Tags'} action={() => setNode(<LoremIpsum/>)}/>
            </List>
            <Divider/>
            <List>
                <NavBarOption icon={<UploadIcon/>} name={'Upload'} action={() => setNode(<LoremIpsum/>)}/>
            </List>
            <Divider/>
            <List>
                <NavBarOption icon={<SearchIcon/>} name={'Search'} action={() => setNode(<LoremIpsum/>)}/>
            </List>
        </NavBar>
    );
};

export default Turrium;