import React from 'react';

import '../Styles/PropertyCard.css';
import example from '../hiclipart.com.png';

const PropertyCard = props => {
  const { title, type, city, bedrooms, bathrooms, price, email } = props;
  return (
    <div className="PropertyCard">
      <span>
        <img src={example} alt="example" className="card-image" />
      </span>
      <div className="property-details">
        <span className="card-title">{title}</span>
        <span className="card-type">{type}</span>
        <span className="card-city">{city}</span>
        <span className="card-bedrooms">{bedrooms}</span>
        <span className="card-bathrooms">{bathrooms}</span>
        <span className="card-price">{price}</span>
        <span className="card-email">{email}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
