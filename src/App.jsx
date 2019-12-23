import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Properties from './Components/Properties';
import AddProperty from './Components/AddProperty';

import './Styles/App.css';

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

  handleLogout() {
    window.FB.logout(function(response) {});
  }

  render() {
    const { userID, name, email, picture } = this.state;
    return (
      <div>
        <NavBar
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          userID={userID}
          name={name}
          email={email}
          picture={picture}
        />
        <Switch>
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
