import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

type CopyrightProps = {
    name: string;
    url: string;
}

const Copyright = (props: CopyrightProps) => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={props.url}>
                {props.name}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;