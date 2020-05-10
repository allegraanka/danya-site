import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as CowLogo } from '../../assets/cow.svg';
import { ReactComponent as HumanLogo} from '../../assets/human.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <CowLogo className='cow-logo' />
            <HumanLogo className='human-logo'/>
        </Link>
        <div className='nav-options options'>
            <Link className='nav-shop-link option' to='/shop'>SHOP</Link>
            <Link className='nav-contact-link option' to='/contact'>CONTACT</Link>
            {
                currentUser ? 
                <div className='nav-auth-link option' onClick={() => 
                    auth.signOut().then(function() {
                        // redirect user back to home page on logout
                        console.log(`user successfully signed out.`);
                  }).catch(function(error) {
                      console.log(`there was an error: ${error}`);
                  })}>
                    SIGN OUT
                </div> 
                : 
                <Link className='nav-auth-link option' to='/sign-in'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;