export { fetchBooks, bookAddToCart, bookDelFromCart, allBookDelFromCart };

function fetchBooks(service, dispatch) {
    return function() {
        dispatch(booksRequest());

        service
            .getBooks()
            .then(books => dispatch(booksSuccess(books)))
            .catch(error => dispatch(booksFailure(error)));
    };
}

function booksRequest() {
    return { 
        type: 'FETCH_BOOKS_REQUEST'
    };
}

function booksSuccess(newBooksList) {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooksList
    };
}

function booksFailure(error) {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
}

function bookAddToCart(bookID) {
    return {
        type: 'BOOK_ADD_TO_CART',
        payload: bookID
    };
}

function bookDelFromCart(bookID) {
    return {
        type: 'BOOK_DEL_FROM_CART',
        payload: bookID
    };
}

function allBookDelFromCart(bookID) {
    return {
        type: 'All_BOOK_DEL_FROM_CART',
        payload: bookID
    };
}
