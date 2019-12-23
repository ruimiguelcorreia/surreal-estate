import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import '../Styles/NavBar.css';
import logo from '../logo.png';

const NavBar = ({ onLogin, onLogout, userID, picture }) => {
  let facebookLoginButton;

  if (!userID) {
    facebookLoginButton = (
      <FacebookLogin appId="598734670881423" fields="name,email,picture" callback={onLogin} />
    );
  } else {
    facebookLoginButton = (
      <button type="button" className="fb-logout-btn" onClick={onLogout}>
        <img src={picture} alt="Profile" className="fb-profile-pic" />
        Logout
      </button>
    );
  }
  return (
    <div className="outer-navbar">
      <Link to="/">
        <img src={logo} alt="Website Logo" />
      </Link>
      <ul className="nav">
        <Link to="/properties" className="item">
          View Properties
        </Link>
        <Link to="/add-property" className="item">
          Add Property
        </Link>
        <span>{facebookLoginButton}</span>
      </ul>
    </div>
  );
};

export default NavBar;
