import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import SideBar from './SideBar';
import PropertyCard from './PropertyCard';

import '../Styles/Properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      properties: [],
      error: false,
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing/')
      .then(response => {
        this.setState({ properties: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(error => console.log(error));
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { search } = this.props.location;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();

    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });

    const { history } = this.props;
    history.push(newQueryString);
  };

  handleSavedProperty = propertyId => {
    const { userID, userFavourites } = this.props;

    if (!userFavourites.includes(propertyId)) {
      Axios.post('http://localhost:3000/api/v1/Favourite', {
        propertyListing: propertyId,
        fbUserId: userID,
      })
        .then(response => console.log(response))
        .then(userFavourites.push(propertyId))
        .catch(error => console.log(error));
    } else {
      alert('Property is already in your favourites!');
    }
  };

  render() {
    const { properties, search } = this.state;
    const { userID } = this.props;

    return (
      <div className="Properties">
        <SideBar buildQueryString={this.buildQueryString} />
        <div className="properties-page">
          <form onSubmit={this.handleSearch} className="search-form">
            <input
              type="text"
              value={search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <button type="submit">
              <FontAwesome className="fa-search" />
            </button>
          </form>

          <div className="cards-display">
            {properties.map(property => (
              <PropertyCard
                key={property._id}
                {...property}
                userID={userID}
                onSaveProperty={this.handleSavedProperty}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Properties.propTypes = {
  buildQueryString: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSavedProperty: PropTypes.func,
  location: PropTypes.object,
  search: PropTypes.string,
  userID: PropTypes.number,
  history: PropTypes.string,
  userFavourites: PropTypes.arrayOf,
};

export default Properties;
