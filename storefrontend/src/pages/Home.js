import React from 'react';

import {
    CssBaseline, Grid, Typography, Container,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from '../components/ItemCard';
import { items } from '../Api/ItemData'




const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(18),
        marginTop: theme.spacing(4),
        backgroundImage: `url(${"/images/cover3.jpg"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'contain',
        textAlign: "center"

    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: (0)
        }
    }
}));


export default function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* <Navbar /> */}
            <main>
                {/* Hero unit */}

                <Container className={classes.cardGrid} maxWidth="lg">
                    <Paper className={classes.mainFeaturedPost} >
                        {/* Increase the priority of the hero background image */}

                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography
                                        style={{ color: "#E84E2F" }}
                                        component="h1" variant="h4" gutterBottom>
                                        <b>ⒿⒺⓌⒺⓁⓇⓎ  ⓈⓉⓄⓇⒺ</b>
                                    </Typography>
                                    <br /><br /><br /><br />
                                    <br /><br /><br /><br />
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End hero unit */}
                    <Grid container spacing={6}>
                        <ItemCard items={items} />
                    </Grid>
                </Container>
            </main>

        </React.Fragment>
    );
}