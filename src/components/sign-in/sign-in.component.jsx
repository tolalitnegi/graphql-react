import React from 'react';
import SignInOut from '../../pages/sign-in-out/sign-in-out';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });

    const {email, password} = this.state;

    try {
      await     auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required></input>
          <label>password</label>
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required></input>
          <input type="submit" value="Sign In" />

          <input type="button" value="Sign In with Google" onClick={signInWithGoogle} />

        </form>
      </div>
    )
  }

}

export default SignIn;
