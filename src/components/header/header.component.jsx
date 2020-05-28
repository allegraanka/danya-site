import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='nav-options options'>
            <Link className='nav-shop-link option' to='/shop'>SHOP</Link>
            <Link className='nav-contact-link option' to='/contact'>CONTACT</Link>
            {currentUser ? (
                <div className='nav-auth-link option' onClick={() => 
                    auth.signOut()
                    .then(() => {
                        window.location.href = '/';
                        console.log("User signed out successfully.");
                    })
                    .catch((error) => console.log('There was an error signing out.', error)) 
                }>
                    SIGN OUT
                </div> 
                 ) : ( 
                <Link className='nav-auth-link option' to='/sign-in'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);

// used to grab data from the store that the connected component needs as props
// createStructuredSelector takes top-level state and passes it down to each selector 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// connect component to the data store - the root reducer
export default connect(mapStateToProps)(Header);