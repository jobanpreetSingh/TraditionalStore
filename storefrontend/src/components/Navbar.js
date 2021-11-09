import React, { useState } from 'react';
import {
    Grid, Toolbar, Typography, Badge
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: "#E84E2F",
        textDecoration: "none",
        fontSize: 16,
        // '&:hover': {
        //     backgroundColor: "green"
        // }
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));


function Navbar(props) {
    const data = useSelector((state) => state.userLoginReducer.data)
    const [navBar, setNavBar] = useState();
    const cartItemsLength = useSelector((state) => {
        return state.addSelectedDetailsProductsReducer.data.length
    })

    useEffect(() => {
        setNavBar(data)
        console.log("login state inside navbar", data)
    }, data)

    const classes = useStyles();

    const Rendernavbar = () => {
        return (
            navBar && navBar === true
                ?
                <>
                    <Link to='/' className={classes.link}>
                        Home
                    </Link>

                    <Link to='/profile' className={classes.link}>
                        Profile
                    </Link>
                    <Link to='/category' className={classes.link}>
                        About_us
                    </Link>

                    <Link to='/logout' className={classes.link}>
                        Logout
                    </Link>
                    <Link to='/cart' className={classes.link}>
                        <Badge badgeContent={cartItemsLength}>
                            <AddShoppingCartIcon />
                        </Badge>

                    </Link>
                </>
                :
                <>
                    <Link to='/' className={classes.link}>
                        Home
                    </Link>

                    <Link to='/login' className={classes.link}>
                        Login
                    </Link>


                    <Link to='/category' className={classes.link}>
                        About_us
                    </Link>

                    <Link to='/cart' className={classes.link}>
                        <Badge badgeContent={cartItemsLength}>
                            <AddShoppingCartIcon />
                        </Badge>

                    </Link>

                </>
        )
    }

    return (
        <div>
            <AppBar position='fixed' color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        style={{ color: "#E84E2F" }}
                        variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        🅣 &🅣- 🅢🅣🅞🅡🅔
                    </Typography>
                    <nav>
                        <Grid container

                            spacing={50}
                        >
                            <Rendernavbar />
                        </Grid>

                    </nav>


                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Navbar;