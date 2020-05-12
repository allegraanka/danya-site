import React from 'react';
import './auth-page.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';


const AuthPage = () => (
    <>
        <div className='sign-in-auth-page'>
            <SignIn />
        </div>
    </>
);

export default AuthPage;