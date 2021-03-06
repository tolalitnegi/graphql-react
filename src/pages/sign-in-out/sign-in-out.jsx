import React from 'react';
import './sign-in-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up';

const SignInOut = () => (
  <div className="sign-in-out">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInOut;