import React, { Component } from "react";
import "./signup.component.style.css";
import FormInput from "../form-input/form-input.component";
import  CustomeButton from '../custome-button/custome-button.component';
import { auth ,createUserProfileDocument} from '../../firebase/firebase.utils';


export default class SignUp extends Component {
  state = {
    firstname: "",
    password: "",
    email: "",
    cpassword: "",
    lastname: ""
  };
  
  handleOnClick=async ()=>{
     const { firstname , lastname , email , password , cpassword } =this.state;
     if( !firstname || !lastname || !email || !password ||!cpassword ){
       alert('please fill the form');
       return;
     }
     if( password !==cpassword){
         alert('passwrod didnot matched');
         return;
     }
     try{
        const {user} = await auth.createUserWithEmailAndPassword( email , password );
       await  createUserProfileDocument( user , this.state)
        
     }catch(error){
        console.log(error)
     }
  }

  handleChangeText=( key ,event)=>{
      console.log(key,event.target.value)
      this.setState({
          [key]:event.target.value
      },()=>{
          console.log('state',this.state)
      })
  }
  render() {
    return (
      <div className="signup">
        <div className="signup-title">
          {" "}
          <p>SignUp</p>
        </div>
        <div className="group1">
          <FormInput
            type="text"
            name="firstname"
            label="firstname"
            value={this.state.firstname}
            onChange={(event)=> this.handleChangeText('firstname',event)}
          />
          <FormInput
            type="text"
            name="lastname"
            label="lastname"
            value={this.state.lastname}
            onChange={(event)=> this.handleChangeText('lastname',event)}
          />
        </div>
        <div className="group2">
          <FormInput
            type="text"
            name="Email"
            label="Email"
            value={this.state.email}
            onChange={(event)=> this.handleChangeText('email',event)}
          />
        </div>
        <div className="group2">
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={(event)=> this.handleChangeText('password',event)}
          />
        </div>
        <div className="group2">
          <FormInput
            type="password"
            name="cpassword"
            label="Email"
            value={this.state.cpassword}
            onChange={(event)=> this.handleChangeText('cpassword',event)}
          />
        </div>
        <div>
            <CustomeButton onButtonClick={ this.handleOnClick }>SignUp</CustomeButton>
        </div>
      </div>
    );
  }
}
