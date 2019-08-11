import React, { Component } from "react";
import './signin.component.style.css';
import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custome-button/custome-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


export default class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  render() {
    return (
      <div className="signin" style={{padding:30}}>
        <div className="signin_title">
          <h3>I already have an Account?</h3>
          <p>Singin with Email and Password</p>
        </div>
        <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="button-group">
          <CustomeButton type="button" onButtonClick={()=>alert('buttonclciked')}>SignIn</CustomeButton>
          <CustomeButton type="button" isGoogleSignIn onButtonClick={signInWithGoogle}>SignIn with google</CustomeButton>
          </div>


      </div>
    );
  }
}
