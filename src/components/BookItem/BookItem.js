import React from 'react';

import './BookItem.css';

const BookItem = ({ book, onBookAddToCart }) => {
    const { id, title, author, price, coverImage } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img
                    src={coverImage}
                    alt="Cover"
                />
            </div>
            <div className="book-details">
                <span href="#" className="book-title">
                    {title}
                </span>
                <div className="book-author">{author}</div>
                <div className="book-price">{price} $</div>
                <button className="btn btn-info add-to-cart" onClick={() => onBookAddToCart(id)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookItem;
