
import { FETCH_PRODUCTS } from '../actions/ActionType'


export const bookReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                items: action.payload
            }
        default:
            return state
    }
}
