import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, deleteFromCart } from '../redux/actions/cartActions';
import booksData from '../static/data'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button, Typography, Card, CardActions, CardContent, CardActionArea, CardMedia, Grid , CardHeader,Avatar ,IconButton } from '@material-ui/core';
const styles = theme => ({
    root: {
        maxWidth: 345
    },
    cards: {
        display: 'inline-flex',
        width: 'max-content'
    },
    container: {
        flex: 1,
        display: 'inline-flex',
        padding: '1em',
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    }
})
function Books(props) {
    const { selectedBooks, deleteFromCart, addToCart, classes, cartProducts, isCart } = props;
    return (
        (isCart ? cartProducts : booksData).map(book => {
            let { title, id, cost, picture, isbn } = book;
            let check = isCart ? selectedBooks[title] : true;
            return <div className={classes.container}>
                {check ? <Grid item id={`book_${title}`} key={id}>
                    <Card className={classes.body}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <InstagramIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardActionArea>
                            {picture && <CardMedia
                                component="img"
                                height="140"
                                image={picture}
                                title={title}
                            />}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {isbn}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    price-{cost}
                                </Typography>
                                {isCart && <Typography variant="body2" color="textSecondary" component="p">
                                    Quantity-{selectedBooks[title]}
                                </Typography>}
                                {isCart && <Typography variant="body2" color="textSecondary" component="p">
                                    SubTotal-{selectedBooks[title] * cost}
                                </Typography>}
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained" color="primary" onClick={() => addToCart({ title, cost })}>
                                Add to Cart
                            </Button>
                            <Button size="small" variant="contained" color="secondary" onClick={() => deleteFromCart({ title, cost })}>
                                Delete from Cart
                            </Button>
                        </CardActions>
                    </Card>
                </Grid> : ''}

            </div>

        })
    )
}
const mapStateToProps = (state) => ({
    selectedBooks: state.cart
})
const mapDispatchToProps = (dispatch) => {
    return {
        ...dispatch,
        ...bindActionCreators({ deleteFromCart, addToCart }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Books))
