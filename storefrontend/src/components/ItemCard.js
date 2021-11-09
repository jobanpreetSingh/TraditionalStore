import React, { useState } from 'react';
import { addCartDetailsConstant } from '../constants'
import {
    Button, Card, CardActions, CardContent,
    CardMedia, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ZoomBox } from '../components/Modals'
import { addCartDetailsAction } from '../Action/index'
import { useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: "65%%",
        "&:hover": {
            // backgroundColor: "#F5F5F5",
            transform: "scale3d(1.05, 1.05, 1)",
        },
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
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

function ItemCard(props) {
    const [images, setImages] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { items } = props;
    const classes = useStyles();


    const handleClickOpen = (images) => {
        setImages(images);

        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false)
    }


    const handleAddCartOpen = (card) => {

        dispatch(addCartDetailsAction(card, addCartDetailsConstant))

    };

    return (
        <>
            {
                isOpen === true
                    ?
                    <ZoomBox
                        images={images}
                        handleClose={handleClose}
                        isOpen={isOpen}

                    />
                    :
                    null
            }

            {
                items.map((card) => (

                    <Grid key={card.id} item xs={12} sm={6} md={3}>

                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.image}
                                title="Image title"

                            />
                            <b style={{ alignSelf: "center" }}>{`CA$ ${card.price}`}</b>
                            <CardContent className={classes.cardContent}>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent='space-between'
                                >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.itemNumber}
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.staus}
                                    </Typography>

                                </Grid>

                                <Typography>
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent='space-between'
                                >
                                    <Button
                                        onClick={() => handleAddCartOpen(card)}
                                        size="small" color="primary">
                                        Add Cart
                                    </Button>
                                    <Button
                                        size="small"
                                        color="primary"
                                        value={card.images}
                                        onClick={() => {
                                            handleClickOpen(card.images);
                                        }}
                                    >
                                        Preview
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </>
    );
}
export default ItemCard;