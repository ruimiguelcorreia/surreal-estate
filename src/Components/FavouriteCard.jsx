import React from 'react';
import Axios from 'axios';

import '../Styles/FavouriteCard.css';

const FavouriteCard = props => {
  const { _id, propertyListing, handleRemove } = props;

  return (
    <div className="FavouriteCard">
      <span className="favourite-name">{propertyListing.title}</span>
      <span className="favourite-name">{propertyListing.type}</span>
      <span className="favourite-name">{propertyListing.bedrooms}</span>
      <span className="favourite-name">{propertyListing.bathrooms}</span>
      <span className="favourite-name">{propertyListing.price}</span>
      <span className="favourite-name">{propertyListing.email}</span>
      <button type="button" onClick={() => handleRemove(_id)}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
