import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../Action/index'
import { USER } from '../constants';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#E84E2F",

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    main: {
        marginTop: "5%",
        marginBottom: "7%"
    }
}));

const SignUp = () => {
    const history = useHistory()
    const [userRegisterState, setUserRegisterState] = useState({
        firstName: "", lastName: "", email: "", phoneNumber: "", password: "", cpassword: ""
    });
    const [isError, setIsError] = useState(false);
    const classes = useStyles();

    const userRegisterStateHandler = (key, val) => {
        setUserRegisterState({
            ...userRegisterState,
            [key]: val
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const { firstName, lastName, email, phoneNumber, password, cpassword } = userRegisterState;
        const res = await fetch('/register_user', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, email, phoneNumber, password, cpassword
            })
        })

        const data = await res.json()
        // console.log("response data", data)

        if (res.status === 422 || !data) {
            window.alert('invalid registration')
        }

        else {
            window.alert("user registered successfully")
            history.push('/login')
        }
    }

    return (
        <Grid
            justifyContent='space-around'
            className={classes.main}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => userRegisterStateHandler(e.target.name, e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={(e) => userRegisterStateHandler(e.target.name, e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => userRegisterStateHandler(e.target.name, e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    type='number'
                                    variant="outlined"
                                    value={userRegisterState.phoneNumber}
                                    required
                                    fullWidth
                                    error={isError}
                                    id="phoneNumber"
                                    label="Phone number"
                                    name="phoneNumber"
                                    autoComplete="Phone number"
                                    onChange={(e) => {
                                        userRegisterStateHandler(e.target.name, e.target.value)

                                        if (e.target.value.length === 10) {
                                            setIsError(false)
                                        }
                                        else if (e.target.value.length > 10 || e.target.value.length < 10) {
                                            setIsError(true)
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => userRegisterStateHandler(e.target.name, e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="cpassword"
                                    label="Confirm password"
                                    type="password"
                                    id="cpassword"
                                    autoComplete="confirm-password"
                                    onChange={(e) => userRegisterStateHandler(e.target.name, e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => submitHandler(e)}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/login'>
                                    Already have an account? Sign in
                                </Link>


                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </Grid>
    )
}


const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loginState, setLoginState] = useState({
        email: "", password: ""
    });
    const classes = useStyles();

    const loginStateHandler = (key, val) => {
        setLoginState({
            ...loginState,
            [key]: val
        })
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = loginState;

            const res = await fetch('/login_user', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            const data = res.json()
            if (res.status === 400 || !data) {
                console.log("response.status in 400", res.status)
                window.alert('Invalid credentials')
            }
            else if (res.status === 200) {
                console.log("response.status in 200", res.status)
                dispatch(userLoginAction(USER, true))
                window.alert('Login Successfully')
                history.push('/')
                window.location.reload()
            }
            else {
                console.log("response.status in else", res.status)
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Grid
            justifyContent='space-around'
            className={classes.main}
        >

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => loginStateHandler(e.target.name, e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => loginStateHandler(e.target.name, e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => loginHandler(e)}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/register' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export { SignIn, SignUp }