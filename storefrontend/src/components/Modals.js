import React from 'react';
import {
    Button, Grid, Typography,
    Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, Slide,
    ImageList, ImageListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
    zoomBox: {
        height: "50%",
        width: "100%",

    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',

    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ZoomBox = ({ images, isOpen, handleClose }) => {

    ZoomBox.propTypes = {
        images: propTypes.string.isRequired,
        isOpen: propTypes.bool.isRequired,
        handleClose: propTypes.func.isRequired
    }
    const classes = useStyles();
    return (
        <>
            <Grid container
                justifyContent='center'
                alignContent="center"
            >
                <Dialog
                    maxWidth="xs"
                    className={classes.zoomBox}
                    open={isOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        <Grid container
                            justifyContent='space-around'
                        >
                            <Typography
                                style={{ color: "#E84E2F" }}
                                variant='h5'>{"Ⓣ & Ⓣ ⓈⓉⓄⓇⒺ"}
                            </Typography>
                        </Grid>



                    </DialogTitle>

                    <DialogContent>
                        <ImageList className={classes.imageList} cols={1.5}>
                            {images && images.map((images) => {
                                return (
                                    <ImageListItem key={images}>
                                        <img src={images.images} alt='#' />
                                    </ImageListItem>
                                )
                            })}

                        </ImageList>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} color="primary">
                            close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    )
}


const AddCartDialog = ({ image, isOpen, handleClose, handleCardAdd, cardData }) => {
    const classes = useStyles();

    const data = useSelector((state) => { return state })
    const count = data.addCartReducer


    AddCartDialog.propTypes = {
        image: propTypes.string.isRequired,
        isOpen: propTypes.bool.isRequired,
        handleClose: propTypes.func.isRequired,
        handleCardAdd: propTypes.func.isRequired
    }


    return (
        <Grid
            container
            justifyContent='center'
            alignContent="center"
        >
            <Dialog
                maxWidth="xs"
                className={classes.zoomBox}
                open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <Grid container
                        justifyContent='space-around'
                    >
                        <Typography
                            style={{ color: "#E84E2F" }}
                            variant='h5'>{"Ⓣ & Ⓣ ⓈⓉⓄⓇⒺ"}
                        </Typography>
                    </Grid>
                </DialogTitle>

                <DialogContent>
                    <ImageList className={classes.imageList} cols={1}>
                        <ImageListItem>
                            <img src={image} alt='#' />
                        </ImageListItem>
                    </ImageList>
                    <Grid
                        container
                        justifyContent="center"
                    >
                        <Button
                            color='primary'
                            onClick={() => console.log('Add product btn clicked')}
                        >
                            <AddSharpIcon />
                        </Button>
                        <Button disabled='true' style={{ color: "red", fontSize: 15 }}><b>{count}</b></Button>
                        <Button color='primary'
                            onClick={() => console.log('subtract product btn clicked')}
                        >
                            <RemoveSharpIcon />
                        </Button>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid
                        container
                        justifyContent="space-between"
                    >
                        <Button
                            onClick={() => handleCardAdd(cardData)}
                            color="primary"
                        >
                            Add
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            close
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export { ZoomBox, AddCartDialog }