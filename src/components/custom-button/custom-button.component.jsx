import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    // refactored with styled-components library and created CustomButtonContainer with function that conditionally renders styles based on props
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton;