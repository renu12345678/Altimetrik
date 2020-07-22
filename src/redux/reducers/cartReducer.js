
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/ActionType'
const initialState = {
    cart: {},
    total: 0,
}
const updateValue=(data,value)=>(data+value)
const checkBookType = (state, title, cost, value, isDelete) => {
    let { cart, total } = state;
    if (cart[title]) {
        if (isDelete && cart[title] >= 1) {
            cart[title] = updateValue(cart[title], value);
            total = updateValue(total, cost);
        }
        else {
            cart[title] = updateValue(cart[title], value);
            total = updateValue(total, cost);
        }
    } else {
        if (!isDelete) {
            cart[title] = 1;
            total += cost;
        }
    }
    return {cart,total}
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let tempAdd = checkBookType(state, action.payload.title, action.payload.cost, 1, false)
            return {
                ...tempAdd
            }
        case REMOVE_FROM_CART:
            let tempDelete = checkBookType(state, action.payload.title, -1*action.payload.cost, -1, true)
            return {
                ...tempDelete
            }
        default:
            return state
    }
}
