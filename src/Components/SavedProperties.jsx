import React, { Component } from 'react';
import Axios from 'axios';

import FavouriteCard from './FavouriteCard';

class SavedProperties extends Component {
  constructor() {
    super();
    this.state = {
      savedProperties: [],
      /* favourites: [], */
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/Favourite?populate=propertyListing')
      .then(response => this.setState({ savedProperties: response.data }))
      .catch(error => console.log(error));
  }

  removeFavourite = () => {
    Axios.delete('http://localhost:3000/api/v1/Favourite/')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    const { savedProperties } = this.state;

    return (
      <div>
        {savedProperties.map(property => (
          <FavouriteCard key={property._id} {...property} />
        ))}
      </div>
    );
  }
}

export default SavedProperties;
