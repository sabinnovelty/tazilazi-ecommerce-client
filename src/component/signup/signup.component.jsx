import React, { Component } from 'react'
import './signup.component.style.css';
import FormInput from '../form-input/form-input.component';

export default class SignUp extends Component {
    state={
        firstname:''
    }
    render() {
        return (
            <div className="signup">
               <div className="signup-title">  <p>SignUp</p></div>
                <div className='group1'>
                    <FormInput type="text" name="firstname" label="firstname" value={this.state.firstname}/>
                    <FormInput  type="text" name="firstname"  label="lastname" value={this.state.firstname}/>
                </div>
            </div>
        )
    }
}
