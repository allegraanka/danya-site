import styled, { css } from 'styled-components';

export const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: #4285f4;

    &:hover {
       background-color: #357ae8;
       border: none;
    }
`;

export const baseButtonStyles = css`
    background: black;
    color: white;
    border: none;

    &:hover {
       background-color: white;
       color: black;
       border: 1px solid black;
    }
`;

export const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    position: absolute;
    bottom: 30px;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : baseButtonStyles;
}

export const CustomButtonContainer = styled.button`
    margin: 10px;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 48px;
    padding: 0 15px 0 15px;
    font-size: 15px;
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;