import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline, Paper, Stepper,
    Step, StepLabel, Button,
    Typography
}
    from '@material-ui/core';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { customerShippingDetailsAction } from '../../Action/index'
import { useDispatch, useSelector } from 'react-redux';
import { CustomerShippingDetailsConstant } from '../../constants';
import uniqid from 'uniqid';
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, addressHandler) {
    switch (step) {
        case 0:
            return <AddressForm fun={addressHandler} />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props) {
    const orderDetails = useSelector((state) => state.addSelectedDetailsProductsReducer)
    console.log("order details", orderDetails)
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [addressState, setAddressState] = useState();

    const dispatch = useDispatch();

    const addressHandler = (key, val) => {
        setAddressState({
            ...addressState,
            [key]: val
        })
    }
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === 0) {
            addressState && dispatch(customerShippingDetailsAction(addressState, CustomerShippingDetailsConstant))
        }

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is {uniqid('#T&T-')}. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>

                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep, addressHandler)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        disabled={activeStep === 0 && !addressState ? true : false}
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>

            </main>
        </React.Fragment>
    );
}