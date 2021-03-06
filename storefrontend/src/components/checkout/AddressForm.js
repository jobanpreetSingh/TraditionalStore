import React from 'react';
import { Typography, Grid, TextField} from '@material-ui/core';
export default function AddressForm(props) {

    return (
        <React.Fragment>

            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>

            <Grid
                container
                spacing={3}
            >

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        onChange={(e) => props.fun(e.target.name, e.target.value)}
                    />
                </Grid>

            </Grid>

        </React.Fragment>
    );
}