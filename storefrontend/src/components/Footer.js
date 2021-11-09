import React from 'react';
import {
     Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}

                Your Website

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography
                    style={{ color: "#E84E2F" }}
                    variant="h6" align="center" gutterBottom>
                    {"Ⓣ & Ⓣ ⓈⓉⓄⓇⒺ"}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </div>
    );
}

export default Footer;