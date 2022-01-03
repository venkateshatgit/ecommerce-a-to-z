import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(e.target.email.value, e.target.password.value);

        setEmail('');
        setPassword('');
    }

    return (  
        <div className='sign-in'>

            <h1>I already have an account</h1>
            <p>Sign in with your email and password</p>
            
            <form onSubmit={handleSubmit}>

                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label={'Email'}
                    setInput={setEmail}
                />
                
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label={'Password'}
                    setInput={setPassword}
                />
                
                <div className="buttons">
                    <CustomButton  type="Submit">Submit</CustomButton>
                    <CustomButton  isGoogleSignIn={true} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
                
                
            </form>
        </div>
    );
}

export default SignIn;