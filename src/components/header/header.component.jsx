import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/cow.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='nav-options options'>
            <Link className='nav-shop-link option' to='/shop'>SHOP</Link>
            <Link className='nav-contact-link option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;