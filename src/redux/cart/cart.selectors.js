import { createSelector } from 'reselect';

// How to write an input redux selector. Input redux selectors always take in entire redux state object and return a slice of it. 
const selectCart = (state) => state.cart;
const selectHidden = state => state.hidden;
/*
HOW TO WRITE A MEMOIZED REDUX SELECTOR
First argument here for createSelector is a collection (array) of input selectors.
The second argument here is a function that will return how to make the selector. 
*/
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
// Now that we've returned cart.cartItems and used createSelector(), our selector is now a memoized selector. 

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce (
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity, 0
        )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce (
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + (cartItem.price * cartItem.quantity), 0
        )
)

