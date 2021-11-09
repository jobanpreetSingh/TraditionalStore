import React, { useEffect, useState } from 'react';
import {
    Grid, Typography, Paper
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Profile(props) {
    const [userData, setUserData] = useState({});
    const history = useHistory();
    const callProfilePage = async () => {
        try {

            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                Credential: "include"
            })
            const data = await res.json()
            setUserData(data)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error)
            history.push('/login');
        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])

    return (
        <Grid container
            justifyContent='space-around'
            alignContent='center'
            style={{ marginTop: '15%' }}
        >
            <Paper style={{ width: "50%", backgroundColor: "#F5F5F5", marginTop: "5%" }}>

                <Grid container
                    justifyContent='center'
                    style={{ marginTop: "5%" }}
                >
                    <Typography variant='h6'>{`${userData && userData.firstName} ${userData && userData.lastName}`}</Typography>
                </Grid>

                <Grid container
                    direction='row'
                    spacing={6}
                    justifyContent="space-around"
                    style={{ marginTop: "5%" }}
                >

                    <Grid item>Email</Grid>
                    <Grid item>{userData && userData.email}</Grid>
                </Grid>
                <Grid container
                    direction='row'
                    justifyContent="space-around"
                    spacing={6}
                >

                    <Grid item>Phone Number</Grid>
                    <Grid item>{userData && userData.phoneNumber}</Grid>
                </Grid>
                <br /><br />
            </Paper>

        </Grid>
    );
}

export default Profile;