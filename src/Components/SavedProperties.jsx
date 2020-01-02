import React, { Component } from 'react';
import Axios from 'axios';

import FavouriteCard from './FavouriteCard';

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

  removeProperty = props => {};

  render() {
    const { savedProperties } = this.state;
    const favourites = savedProperties.map(property => property.propertyListing);

    return (
      <div>
        {favourites.map(favourite => (
          <FavouriteCard key={favourite.id} {...favourite} removeFavourite={this.removeProperty} />
        ))}
      </div>
    );
  }
}

export default SavedProperties;
