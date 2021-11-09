import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid, Divider, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function Review() {
    const listData = useSelector((state) => state.addSelectedDetailsProductsReducer.data)
    const shippingDetails = useSelector((state) => state.customerShippingDetailsReducer.data.at(-1))

    // Calculate price 
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const subTotal = listData && listData.map(({ data }) => {
        return data.price;
    }).reduce((accumulator, curVal) => {
        const num = (accumulator += curVal)
        return num
    }, 0)

    const TaxAmount = (subTotal * 0.13);
    const Total = (subTotal + TaxAmount);
    return (

        <Grid
            justifyContent='space-around'
        >
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>

            <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
                <List
                    disablePadding>
                    {listData && listData.map(({ data }) => (
                        <ListItem key={data.key}>
                            <ListItemText primary={data.name} secondary={data.description} />
                            <Typography variant="body2">{data.price}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper>
                <br />
                <Grid container
                    justifyContent='space-around'

                >
                    <Grid item>

                        <Typography variant="subtitle1">
                            Sub Total
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            {formatter.format(subTotal)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container
                    justifyContent='space-around'

                >
                    <Grid item>

                        <Typography variant="subtitle1">
                            Tax
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            {`+  ${formatter.format(TaxAmount)}`}
                        </Typography>
                        <Divider />
                    </Grid>
                </Grid>

                <Grid container
                    justifyContent='space-around'

                >
                    <Grid item>

                        <Typography variant="subtitle1">
                            Total
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            ${formatter.format(Total)}
                        </Typography>
                    </Grid>
                </Grid>
                <br />
            </Paper>

            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom >
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{`${shippingDetails.data.firstName} ${shippingDetails.data.lastName}`}</Typography>
                    <Typography variant="h8" gutterBottom >{`${shippingDetails.data.address1}, ${shippingDetails.data.city}, ${shippingDetails.data.state}, ${shippingDetails.data.zip}`}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom >
                        NOTE:
                    </Typography>

                    <Typography variant="h8" gutterBottom >
                        your order would be shipped and shipping details email you after receiving money.
                    </Typography>

                </Grid>

            </Grid>
        </Grid>

    );
}