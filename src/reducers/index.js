import updateShoppingCart from './shoppingCart';
import updateBookList from './bookList';

export default reducer;

function reducer(state, action) {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };
}
