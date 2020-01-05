import React, { Component } from 'react';
import Axios from 'axios';

import FavouriteCard from './FavouriteCard';

import '../Styles/SavedProperties.css';
import img from '../img/add-property-bkg.jpg';

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

  handleDelete = _id => {
    Axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
      .then(
        this.setState({
          savedProperties: this.state.savedProperties.filter(property => property._id !== _id),
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
    const { savedProperties } = this.state;

    return (
      <div className="SavedProperties">
        {savedProperties.map(property => (
          <FavouriteCard key={property._id} {...property} removeFavourite={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default SavedProperties;
