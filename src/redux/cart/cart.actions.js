import CartActionTypes from './cart.types';

export const toggleCartHidden = () => {
    return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = item => {
    return { type: CartActionTypes.ADD_ITEM, payload: item };
};

export const removeItem = item => {
    return { type: CartActionTypes.REMOVE_ITEM, payload: item };
};

export const clearCart = () => {
    return { type: CartActionTypes.CLEAR_CART };
};

export const clearItemFromCart = item => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item,
    };
};

export const setCartFromFirebase = cartItems => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems,
});

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});
