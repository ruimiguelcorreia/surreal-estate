import React from 'react';
import Axios from 'axios';

import '../Styles/FavouriteCard.css';

const FavouriteCard = props => {
  const { _id, propertyListing } = props;

  const removeFavourite = () => {
    Axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div className="FavouriteCard">
      <span className="favourite-name">{propertyListing.title}</span>
      <span className="favourite-name">{propertyListing.type}</span>
      <span className="favourite-name">{propertyListing.bedrooms}</span>
      <span className="favourite-name">{propertyListing.bathrooms}</span>
      <span className="favourite-name">{propertyListing.price}</span>
      <span className="favourite-name">{propertyListing.email}</span>
      <button type="button" onClick={removeFavourite}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
