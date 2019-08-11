import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from '../../firebase/firebase.utils'
import './style.css'
class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <div className="main-header_brand">
          <div className="main-header_brand_item1">
            <Link to="/"> Tazilazi:Test culture with us </Link>
          </div>
          <div className="main-header_brand_item2">
            <input
              type="text"
              className="form-control"
              placeholder="search newari food that you"
            />
          </div>
        </div>
        <nav className="main-nav">
          <ul className="main-nav_items">
            <li className="main-nav_item">AboutUs &nbsp;</li>
            <li className="main-nav_item">
              {this.props.user ? (
                <div className="option" onClick={() => auth.signOut()}>
                  SIGN OUT
                </div>
              ) : (
                <Link className="option" to="/signin">
                  SIGN IN
                </Link>
              )}
            </li>
            <li className="main-nav_item">
              <i className="fas fa-cart-arrow-down fa-2x" />&nbsp;cart
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  console.log("");
  return {
    user: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
