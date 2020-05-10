import React from 'react';
import './sign-in.styles.scss';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: ''});
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>Sign in to access your account.</h1>

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

                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
                </form>

                <span className='account-status-toggle'>Don't have an account?</span> 
                <Link to='/sign-up'>
                    Create one
                </Link>
            </div>
        );
    }
}

export default SignIn;