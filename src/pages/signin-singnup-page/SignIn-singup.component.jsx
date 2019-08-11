import React, { Component } from 'react'
import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/signup/signup.component';
import './signin-signup.style.scss';
export default class SingInSignUp extends Component {
    render() {
        return (
            <div class="sigin-signup">
                <SignIn  />
                <SignUp />
            </div>
        )
    }
}
