import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {currentUser ? (
                <OptionDiv onClick={() => 
                    auth.signOut()
                    .then(() => {
                        window.location.href = '/';
                        console.log("User signed out successfully.");
                    })
                    .catch((error) => console.log('There was an error signing out.', error)) 
                }>
                    SIGN OUT
                </OptionDiv> 
                 ) : ( 
                <OptionLink to='/sign-in'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
);

// used to grab data from the store that the connected component needs as props
// createStructuredSelector takes top-level state and passes it down to each selector 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// connect component to the data store - the root reducer
export default connect(mapStateToProps)(Header);