import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import {createMuiTheme} from "@material-ui/core";

const themeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#0E263A'
        },
        secondary: {
            main: '#FFDA52',
        },
        text: {
            primary: '#FFDA52',
            secondary: '#6599AA'
        },
        background: {
            default: '#2B2B2B',
            paper: '#0E263A'
        }
    },
    props: {
        MuiSvgIcon: {
            color: 'secondary'
        }
    }
};

const Turrium = createMuiTheme(themeOptions);

export default Turrium;