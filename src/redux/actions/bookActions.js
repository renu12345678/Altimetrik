import { FETCH_PRODUCTS} from './ActionType';
import booksData from '../../static/data'
export const fetchBooks = () => ({
    type: FETCH_PRODUCTS, payload: booksData
})