import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { addToCart, deleteFromCart } from '../redux/actions/cartActions'
// import { fetchBooks } from '../redux/actions/bookActions';
import { connect } from 'react-redux';
import { IconButton, Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import books from '../static/data';
import Checkout from './checkOut'
import BooksComponent from './books'
const getCost = (title) => (books.filter(book => book.title === title)[0].cost);
const generateData = (cart) => {
    let cartBooks = [], count = 0;
    Object.keys(cart).forEach(item => {
        count += cart[item];
        cartBooks.push({ title: item, cost: getCost(item) });
    })
    return { cartBooks, count }
}
// const getBooksCount = (cart) => {
//     let total = 0;
//     Object.keys(cart).forEach(i => total += cart[i]);
//     return total
// }
function Cart(props) {
    const [open, setOpen] = useState(false);
    const { total, selectedBooks } = props;
    const { count, cartBooks } = generateData(selectedBooks);
    const[ischeckout,setCheckout]=useState(false);
    return (
        <div>
            <IconButton arial-label='show cart item' color="inherit">
                <Badge badgeContent={count} onClick={() => setOpen(true)}>
                    <AddShoppingCart />
                </Badge>
            </IconButton>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {ischeckout === false?<DialogTitle id="alert-dialog-title">{"Checkout to cart"}</DialogTitle>:""}
                {ischeckout === false?<DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <BooksComponent isCart={true} cartProducts={count?cartBooks:[]}/>
                    </DialogContentText>
                </DialogContent>:""}
               { ischeckout === false?<DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Total Cost `${total}`
                    </DialogContentText>
                </DialogContent>:""}
               {ischeckout === false? <DialogActions>
                    <Button onClick={() => setCheckout(true)} color="primary" variant="contained" autoFocus>
                        PROCEED TO CHECKOUT
                    </Button>
                </DialogActions>:""}
                {  ischeckout? <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Checkout/>
                    </DialogContentText>
                </DialogContent>:""}
            </Dialog>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
    total: state.total,
    selectedBooks: state.cart
}}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ deleteFromCart, addToCart }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
