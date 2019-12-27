import React from 'react';

import '../Styles/PropertyCard.css';
import FontAwesome from 'react-fontawesome';
import example from '../hiclipart.com.png';

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
        Save
      </button>
    );
  }

  return (
    <div className="PropertyCard">
      <span>
        <img src={example} alt="example" className="card-image" />
      </span>
      <div className="property-details">
        <span className="card-title">{title}</span>
        <span className="card-type">{type}</span>
        <span className="card-city">{city}</span>
        <span className="card-bedrooms">
          {bedrooms} <FontAwesome className="fa-bed" />
        </span>
        <span className="card-bathrooms">
          {bathrooms} <FontAwesome className="fa-bath" />
        </span>
        <span className="card-price">{price}</span>
        <a href={`mailto:${email}`} className="email-btn">
          <FontAwesome className="fal fa-envelope" />
          <span className="email-text">Email</span>
        </a>
        {saveButton}
      </div>
    </div>
  );
};

export default PropertyCard;
