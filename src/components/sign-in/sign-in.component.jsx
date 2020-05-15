import React from 'react';
import './sign-in.styles.scss';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        // destructure email and password off of state
        const { email, password } = this.state;

        try {
            // pass entered email and password into firebase auth method signInWithEmailandPassword
            await auth.signInWithEmailAndPassword(email, password);
            // if sign in succeeds, clear the state
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log('error signing in: ', error);
        }
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>Sign in to continue.</h1>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email'  
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        type='password' 
                        name='password'  
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password' 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in w/ Google</CustomButton>
                    </div>

                    <span>Don't have an account? </span>
                    <Link to='/sign-up'>Sign up</Link>
                </form>
            </div>
        );
    }
}

export default SignIn;