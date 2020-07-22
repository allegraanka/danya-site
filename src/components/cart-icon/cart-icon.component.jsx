import React from 'react';
import { CartIconStyles, IconWrapperStyles, ItemCountStyles } from './cart-icon.styles';

import { ReactComponent as ShoppingBag } from '../../assets/images/bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconStyles onClick={toggleCartHidden}>
        <IconWrapperStyles>
            <ShoppingBag />
        </IconWrapperStyles>
        <ItemCountStyles> 
            {itemCount}
        </ItemCountStyles>
    </CartIconStyles>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);