import React from 'react';
import './custome-button.style.scss';

const CustomeButton = ( { onButtonClick ,children ,isGoogleSignIn,...otherProps  } )=>(
    <button {...otherProps}   className={` ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
    onClick={onButtonClick }
    >
        { children }
    </button>
);

export default CustomeButton;