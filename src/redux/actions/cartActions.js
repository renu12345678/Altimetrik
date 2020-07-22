import { ADD_TO_CART, REMOVE_FROM_CART } from './ActionType'
export const addToCart = (data) => ({
    type: ADD_TO_CART, payload: data
})
export const deleteFromCart = (data) => ({
    type: REMOVE_FROM_CART, payload: data
})