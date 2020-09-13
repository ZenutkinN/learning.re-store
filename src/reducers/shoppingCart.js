export default updateShoppingCart;

function updateShoppingCart(state, action) {
    if (state === undefined) {
        return { cartBooks: [], totalCartPrice: 0 };
    }

    const { type } = action;
    const { shoppingCart } = state;

    switch (type) {
        case 'BOOK_ADD_TO_CART':
            return {
                ...shoppingCart,
                cartBooks: updateCart(state, action.payload, 1)
            };

        case 'BOOK_DEL_FROM_CART':
            return {
                ...shoppingCart,
                cartBooks: updateCart(state, action.payload, -1)
            };

        case 'All_BOOK_DEL_FROM_CART':
            const { count } = shoppingCart.cartBooks.find(
                ({ id }) => id === action.payload
            );

            return {
                ...shoppingCart,
                cartBooks: updateCart(state, action.payload, -count)
            };

        default:
            return state.shoppingCart;
    }
}

function updateCart(state, bookId, quantity) {
    const {
        bookList: { books },
        shoppingCart: { cartBooks }
    } = state;

    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartBooks.findIndex(({ id }) => id === bookId);
    const item = cartBooks[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return updateCartItems(cartBooks, newItem, itemIndex);
}

function updateCartItem(book, item = {}, quantity) {
    const { id = book.id, title = book.title, count = 0, amount = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        amount: amount + quantity * book.price
    };
}

function updateCartItems(cartBooks, newItem, idx) {
    if (newItem.amount === 0) {
        return [...cartBooks.slice(0, idx), ...cartBooks.slice(idx + 1)];
    }

    if (idx === -1) {
        return [...cartBooks, newItem];
    }

    return [...cartBooks.slice(0, idx), newItem, ...cartBooks.slice(idx + 1)];
}
