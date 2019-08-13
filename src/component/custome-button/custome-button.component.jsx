import React from 'react';
import './custome-button.style.scss';

const CustomeButton = ( { onButtonClick ,children ,inverted , isGoogleSignIn,...otherProps  } )=>(
    <button {...otherProps}   className={` ${inverted ? 'inverted':''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
    onClick={onButtonClick }
    >
        { children }
    </button>
);

export default CustomeButton;