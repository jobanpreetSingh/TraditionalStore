import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider } from '@material-ui/core';

export default function PaymentForm() {
    return (
        <Grid
            container
            justifyContent="center"
        >


            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item>
                    <Typography variant="h5">
                        Payment method
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" >
                        we accept only ETransfers
                    </Typography>
                </Grid>
                <Divider />

                <Grid item>
                    <Typography variant="h6">
                        email: abc@gmail.com
                    </Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}