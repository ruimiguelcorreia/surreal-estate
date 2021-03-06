import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';

import '../Styles/NavBar.css';
import FontAwesome from 'react-fontawesome';

const NavBar = ({ onLogin, onLogout, userID, picture }) => {
  let facebookLoginButton;

  if (!userID) {
    facebookLoginButton = (
      <FacebookLogin
        appId="598734670881423"
        fields="name,email,picture"
        callback={onLogin}
        cssClass="my-facebook-button-class"
      />
    );
  } else {
    facebookLoginButton = (
      <button type="submit" className="fb-logout-btn" onClick={onLogout}>
        <img src={picture} alt="Profile" className="fb-profile-pic" />
        Logout
      </button>
    );
  }

  return (
    <div className="outer-navbar">
      <Link to="/">
        <FontAwesome className="fa-fort-awesome">
          <span className="logo-title">Surreal Estate</span>
        </FontAwesome>
      </Link>
      <ul className="nav">
        <Link to="/properties" className="item">
          View Properties
        </Link>
        <Link to="/add-property" className="item">
          Add Property
        </Link>
        {userID && (
          <Link to="/saved-properties" className="item">
            Saved Properties
          </Link>
        )}
      </ul>
      <span>{facebookLoginButton}</span>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  userID: PropTypes.string,
  picture: PropTypes.string,
};

export default NavBar;
