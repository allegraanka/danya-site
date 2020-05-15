import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/images/bag.svg';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingBag className='shopping-bag-icon'/>
        <span className='item-count'> 0 </span>
    </div>
)

export default CartIcon;