import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className="main-header">
     <div className="main-header_brand">
            <div className="main-header_brand_item1">
                <Link to="/"> Tazilazi:Test culture with us </Link>
            </div>
            <div className="main-header_brand_item2">
               <input type="text" className="form-control" placeholder="search newari food that you"/>
            </div>
      </div> 
      <nav className="main-nav">
        <ul className="main-nav_items">
          <li className="main-nav_item">AboutUs &nbsp;</li>
          <li className="main-nav_item"><Link to="/signin"> Login&nbsp; </Link></li>
          <li className="main-nav_item"><i className="fas fa-cart-arrow-down fa-2x"></i>&nbsp;cart</li>
        </ul>
      </nav>  
    </header>
  )
}
