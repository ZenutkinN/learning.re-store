import React, { Component } from 'react';
import { connect } from 'react-redux';

import { WithBookStoreService } from './../HOC';
import BookItem from './../BookItem/';
import { compose } from './../../utils';
import { fetchBooks, bookAddToCart } from './../../actions';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';

import './BookList.css';

const BookList = ({ books, onBookAddToCart }) => {
    return (
        <ul className="book-list">
            {books.map(book => {
                return (
                    <BookItem
                        key={book.id}
                        book={book}
                        onBookAddToCart={onBookAddToCart}
                    />
                );
            })}
        </ul>
    );
};

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onBookAddToCart } = this.props;

        if (error) return <ErrorIndicator />;

        if (loading) return <Spinner />;

        return <BookList books={books} onBookAddToCart={onBookAddToCart} />;
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
    return {
        fetchBooks: fetchBooks(service, dispatch),
        onBookAddToCart: id => dispatch(bookAddToCart(id))
    };
};

export default compose(
    WithBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
