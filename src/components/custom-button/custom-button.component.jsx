import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    // takes the children of whatever the current input is and passes it into the button
    // spreads other necessary props in (i.e. type="submit")
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
)

export default CustomButton;