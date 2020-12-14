import React from 'react';
import SignInOut from '../../pages/sign-in-out/sign-in-out';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    };
  }
  handleChange=(e)=>{
    const {value, name} = e.target;
    this.setState({[name]:value});

  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({email:'', password:''});
  }

  render(){
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" onChange={this.handleChange}  value={this.state.email} required></input>
          <label>email</label>
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required></input>
          <label>password</label>
        <input type="submit" value="form submit" />
        </form>
      </div>
    )
  }

}

export default SignIn;