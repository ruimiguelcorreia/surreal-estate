import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import FavouriteCard from './FavouriteCard';

import '../Styles/SavedProperties.css';

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
    const { savedProperties } = this.state;

    Axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
      .then(
        this.setState({
          savedProperties: savedProperties.filter(property => property._id !== _id),
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

SavedProperties.propTypes = {
  savedProperties: PropTypes.arrayOf,
};

export default SavedProperties;
