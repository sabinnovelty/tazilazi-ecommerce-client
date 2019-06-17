import React from 'react';
import './style.css';

export default function Header () {
  return (
    <header className="main-header">
     <div className="main-header_brand">
            <div className="main-header_brand_item1">
                <a href="#" className="brand">Tazilazi:Test culture with us</a>
            </div>
            <div className="main-header_brand_item2">
               <input type="text" className="form-control" placeholder="search newari food that you"/>
            </div>
      </div> 
      <nav className="main-nav">
        <ul className="main-nav_items">
          <li className="main-nav_item">Login & singup &nbsp;<i class="fas fa-caret-down"></i></li>
          <li className="main-nav_item"><i className="fas fa-cart-arrow-down fa-2x"></i>&nbsp;cart</li>
        </ul>
      </nav>  
    </header>
  )
}
