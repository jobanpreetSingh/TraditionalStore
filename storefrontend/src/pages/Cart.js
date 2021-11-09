/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, RadioGroup, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { DeleteConstant } from '../constants'
import { addCartDetailsAction } from '../Action/index'
import Checkout from '../components/checkout/Checkout';
import Simplemodal from '../components/modals/Simplemodal';

const useStyles = makeStyles((theme) => ({
    gridList: {
        backgroundColor: 'white',
        width: "80%",
        height: "50%"

    },
    root: {
        marginTop: "15%",
        marginBottom: "15%",
    }
}));

function Cart() {
    const selectedProductListData = useSelector((state) => { return state.addSelectedDetailsProductsReducer.data })
    const dispatch = useDispatch();
    const [listData, setListData] = useState()
    const [selectedSize, setSelectedSize] = useState();

    useEffect(() => {
        setListData(selectedProductListData)
    }, selectedProductListData)
    // Calculate price 
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const price = listData && listData.map(({ data }) => {
        return data.price;
    }).reduce((accumulator, curVal) => {
        const num = (accumulator += curVal)
        return num
    }, 0)

    const deleteListHandler = (id) => {
        dispatch(addCartDetailsAction(id, DeleteConstant))
        setListData(selectedProductListData)
    }

    const sizeSelectHandler = (key, val) => {

        console.log(key, val)
        setSelectedSize(
            {
                ...selectedSize,
                [key]: val
            }
        )
    }
    const classes = useStyles();
    return (

        <Grid
            container
            direction='column'
            justifyContent="center"
            alignItems="center"
            className={classes.root}
        >
            {listData && listData.map(({ data }, index) => {


                return (
                    <Grid container key={index}
                        className={classes.gridList}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item
                            lg={1}>
                            <b>{data.itemNumber}</b>
                        </Grid>

                        <Grid item lg={2}>
                            <img width='50%' height='10%' src={data.image} alt='#' />
                        </Grid>
                        <Grid item lg={1}><b>{data.name}</b></Grid>

                        <Grid item lg={2}
                        >

                            <Grid container
                                direction="row"
                                spacing={4}
                            >
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="position" row>
                                        <FormControlLabel
                                            value="sm"
                                            size='small'
                                            control={<Radio color="primary" />}
                                            label="sm"
                                            labelPlacement='top'
                                            onChange={(e) => sizeSelectHandler(data.itemNumber, e.target.value)}
                                        />

                                        <FormControlLabel
                                            value="md"
                                            size='small'
                                            control={<Radio color="primary" />}
                                            label="md"
                                            labelPlacement='top'
                                            onClick={(e) => sizeSelectHandler(data.itemNumber, e.target.value)}
                                        />

                                        <FormControlLabel
                                            value="lg"
                                            size='small'
                                            control={<Radio color="primary" />}
                                            label="lg"
                                            labelPlacement='top'
                                            onClick={(e) => sizeSelectHandler(data.itemNumber, e.target.value)}
                                        />
                                    </RadioGroup >
                                </FormControl>

                            </Grid>
                        </Grid>
                        <Grid item lg={1}>{` CA$ ${data.price}`}</Grid>
                        <Grid item
                            lg={1}

                        >
                            <Button
                                onClick={() => deleteListHandler(index)}
                            >
                                <DeleteForeverOutlinedIcon />
                            </Button>

                        </Grid>


                    </Grid>

                )
            })}

            {
                <Grid container
                    justifyContent="space-around"
                    alignItems="center"
                    style={{ marginTop: "5%" }}
                >
                    <Grid item
                    >
                        <Typography variant='h6' style={{ backgroundColor: "white" }}> Total CA$ {formatter.format(price)}</Typography>
                    </Grid>
                    <Grid item>
                        {
                            listData && listData.length > 0
                                ?
                                <Simplemodal
                                    buttonName='Checkout'
                                    data={
                                        <Checkout />
                                    }

                                />
                                : null

                        }

                    </Grid>

                </Grid>
            }

        </Grid >
    )

}

export default Cart;