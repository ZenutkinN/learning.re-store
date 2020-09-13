export default updateBookList;

function updateBookList(state, action) {
    if (state === undefined) {
        return { books: [], loading: true, error: null };
    }

    const { bookList } = state;
    const { type } = action;

    switch (type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...bookList,
                books: [],
                loading: true
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...bookList,
                books: action.payload,
                loading: false
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: true,
                error: action.payload
            };

        default:
            return bookList;
    }
}
