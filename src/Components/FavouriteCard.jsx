import React from 'react';

import '../Styles/FavouriteCard.css';

const FavouriteCard = props => {
  const { title, type, bedrooms, bathrooms, price, email, removeFavourite } = props;

  return (
    <div className="FavouriteCard">
      <span className="favourite-name">{title}</span>
      <span className="favourite-name">{type}</span>
      <span className="favourite-name">{bedrooms}</span>
      <span className="favourite-name">{bathrooms}</span>
      <span className="favourite-name">{price}</span>
      <span className="favourite-name">{email}</span>
      <button type="button" onClick={removeFavourite}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
