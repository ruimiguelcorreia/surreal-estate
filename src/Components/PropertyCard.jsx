import React from 'react';
import PropTypes from 'prop-types';

import '../Styles/PropertyCard.css';
import FontAwesome from 'react-fontawesome';

const PropertyCard = props => {
  const {
    _id,
    title,
    type,
    city,
    bedrooms,
    bathrooms,
    price,
    email,
    userID,
    onSaveProperty,
  } = props;

  let saveButton;

  if (userID) {
    saveButton = (
      <button type="button" className="save-button" onClick={() => onSaveProperty(_id)}>
        <FontAwesome className="fa-heart" />
      </button>
    );
  }

  return (
    <div className="PropertyCard">
      {saveButton}
      <span>
        <img src={require(`../img/${type}.jpg`)} alt="Property" className="property-image" />
      </span>
      <div className="property-details">
        <span className="card-title">{title}</span>
        <span>
          <span className="card-type">{type} in </span>
          <span className="card-city">{city}</span>
        </span>
        <div>
          <span className="card-bedrooms">
            {bedrooms} <FontAwesome className="fa-bed" />{' '}
          </span>
          <span className="card-bathrooms">
            {bathrooms} <FontAwesome className="fa-bath" />
          </span>
        </div>
        <span className="card-price">{price}</span>
        <a href={`mailto:${email}`} className="email-btn">
          <FontAwesome className="fal fa-envelope" />
          <span className="email-text">Email</span>
        </a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  city: PropTypes.string,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  price: PropTypes.number,
  email: PropTypes.string,
  userID: PropTypes.number,
  onSaveProperty: PropTypes.func,
};

export default PropertyCard;
