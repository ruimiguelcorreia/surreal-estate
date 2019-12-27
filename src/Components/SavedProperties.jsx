import React, { Component } from 'react';
import Axios from 'axios';

class SavedProperties extends Component {
  constructor() {
    super();
    this.state = {
      savedProperties: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/Favourite?populate=propertyListing')
      .then(response => this.setState({ savedProperties: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default SavedProperties;
