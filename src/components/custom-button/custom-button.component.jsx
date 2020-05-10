import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    // takes the children of whatever the current input is and passes it into the button
    // spreads other necessary props in (i.e. type="submit")
    <button className='custom-button' {...otherProps}>
        { children }
    </button>
)

export default CustomButton;