import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='nav-options options'>
            <Link className='nav-shop-link option' to='/shop'>SHOP</Link>
            <Link className='nav-contact-link option' to='/contact'>CONTACT</Link>
            {
                currentUser ? (
                <div className='nav-auth-link option' onClick={() => 
                    auth.signOut().then(function() {
                        window.location.href = '/';
                        console.log(`user successfully signed out.`);
                  }).catch(function(error) {
                      console.log(`there was an error: ${error}`);
                  })}>
                    SIGN OUT
                </div> 
                 ) : ( 
                <Link className='nav-auth-link option' to='/sign-in'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
)

// used to grab data from the store that the connected component needs as props
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// connect component to the store
export default connect(mapStateToProps, )(Header);