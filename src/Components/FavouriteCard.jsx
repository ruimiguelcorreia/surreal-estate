import React from 'react';
import PropTypes from 'prop-types';

import '../Styles/FavouriteCard.css';
import FontAwesome from 'react-fontawesome';

const FavouriteCard = props => {
  const { _id, propertyListing, removeFavourite } = props;

  return (
    <div className="FavouriteCard">
      <div className="favourite-details">
        <span className="favourite-title">{propertyListing.title}</span>
        <span className="favourite-city">{propertyListing.city}</span>
        <span className="favourite-bedrooms">
          {propertyListing.bedrooms} <FontAwesome className="fa-bed" />
        </span>
        <span className="favourite-bathrooms">
          {propertyListing.bathrooms} <FontAwesome className="fa-bath" />
        </span>
        <span className="favourite-price">{propertyListing.price} £</span>
      </div>
      <span className="favourite-email">
        <a href={`mailto:${propertyListing.email}`}>
          <FontAwesome className="fap fa-envelope" />
        </a>
      </span>
      <button type="button" onClick={() => removeFavourite(_id)} className="remove-btn">
        <FontAwesome className="fa-trash" />
      </button>
    </div>
  );
};

FavouriteCard.propTypes = {
  propertyListing: {
    title: PropTypes.string,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    city: PropTypes.string,
    price: PropTypes.number,
    email: PropTypes.string,
  },
};

export default FavouriteCard;
