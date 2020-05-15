import React from 'react';

import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapDispatchToProps = dispatch => {
    return {
        clearItem: item => {
            dispatch(clearItemFromCart(item));
        },
        addItem: item => {
            dispatch(addItem(item));
        },
        removeItem: item => {
            dispatch(removeItem(item));
        },
    };
};

const CheckoutItem = ({
    cartItem,
    clearItem,
    addItem,
    removeItem,
}) => {
    const { nombre, imageUrl, precio, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container '>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{`Repuesto ${nombre}`}</span>
            <span className='quantity'>
                <div
                    className='arrow'
                    onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div
                    className='arrow'
                    onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${precio}</span>
            <div
                className='remove-button'
                onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
