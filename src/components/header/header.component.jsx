import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as CowLogo } from '../../assets/cow.svg';
import { ReactComponent as HumanLogo} from '../../assets/human.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <CowLogo className='cow-logo' />
            <HumanLogo className='human-logo'/>
        </Link>
        <div className='nav-options options'>
            <Link className='nav-shop-link option' to='/shop'>SHOP</Link>
            <Link className='nav-contact-link option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;