import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (e) => {
    e.preventDefault();
   this.setState({ [e.target.name] : e.target.value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { handleChange } = this;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>Display Name</label>
          <input type="text" name="displayName" id="displayName" onChange={handleChange} value={displayName} required />
          
          <label>Email</label>
          <input type="email" onChange={handleChange} value={email} name="email" id="email" required />
          

          <label>Password</label>
          <input type="password" onChange={handleChange} value={password} name="password" id="password" required />
          

          <label>Confirm Password</label>
          <input type="password" onChange={handleChange} value={confirmPassword} name="confirmPassword" id="confirmPassword" required />

          <input type="submit" value="Sign Up" />
        </form>


      </div>
    )
  }
}

export default SignUp;
