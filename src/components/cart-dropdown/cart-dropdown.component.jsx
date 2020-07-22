import React from 'react';
import { connect } from 'react-redux';
import { CartDropdownStyles, CartItemStyles, EmptyMessageStyles } from './cart-dropdown.styles';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownStyles>
        <CartItemStyles>
            {cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            ) : ( 
                <EmptyMessageStyles>Your cart is empty.</EmptyMessageStyles>
            )}
        </CartItemStyles>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownStyles>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));