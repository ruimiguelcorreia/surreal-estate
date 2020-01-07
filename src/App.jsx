import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Properties from './Components/Properties';
import AddProperty from './Components/AddProperty';
import SavedProperties from './Components/SavedProperties';

import './Styles/App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userID: null,
      name: '',
      email: '',
      picture: '',
    };
  }

  handleLogin = response => {
    this.setState({
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  handleLogout = response => {
    this.setState({ userID: null });
  };

  render() {
    const { userID, name, email, picture } = this.state;
    return (
      <div>
        <NavBar
          className="NavBar"
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          userID={userID}
          name={name}
          email={email}
          picture={picture}
        />
        <Switch>
          <Route
            exact
            path="/properties"
            render={props => <Properties {...props} userID={userID} />}
          />
          <Route exact path="/add-property" component={AddProperty} />

          {userID && <Route exact path="/saved-properties" component={SavedProperties} />}
        </Switch>

        <div className="top-half">
          <span className="intro">
            let's find you a home
            <Link to="/properties">
              <FontAwesome className="fas fa-chevron-circle-right" />
            </Link>
          </span>
        </div>
        <div className="bottom-half" />
      </div>
    );
  }
}

export default App;
