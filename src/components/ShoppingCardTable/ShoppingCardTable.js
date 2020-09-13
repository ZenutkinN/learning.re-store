import React from 'react';
import { connect } from 'react-redux';

import {
    bookAddToCart,
    bookDelFromCart,
    allBookDelFromCart
} from './../../actions';

import './ShoppingCardTable.css';

const ShoppingCardTable = ({
    cartBooks,
    totalCartPrice,
    onInc,
    onDec,
    onDel
}) => {
    const items = cartBooks.map((book, idx) => {
        const { id, title, count, amount } = book;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{amount} $</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDel(id)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => onInc(id)}
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={() => onDec(id)}
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>{items}</tbody>
            </table>

            <div className="total">Total: {totalCartPrice} $</div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartBooks, totalCartPrice } }) => {
    return {
        cartBooks,
        totalCartPrice
    };
};

const mapDispatchToProps = {
    onInc: bookAddToCart,
    onDec: bookDelFromCart,
    onDel: allBookDelFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);
