import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/SideBar.css';

const SideBar = ({ buildQueryString }) => (
  <div className="SideBar">
    <Link to={buildQueryString('query', { city: 'Manchester' })} className="option">
      Manchester
    </Link>
    <Link to={buildQueryString('query', { city: 'Leeds' })} className="option">
      Leeds
    </Link>
    <Link to={buildQueryString('query', { city: 'Liverpool' })} className="option">
      Liverpool
    </Link>
    <Link to={buildQueryString('query', { city: 'Sheffield' })} className="option">
      Sheffield
    </Link>
    <Link to={buildQueryString('sort', { price: -1 })} className="option">
      Price Descending
    </Link>
    <Link to={buildQueryString('sort', { price: 1 })} className="option">
      Price Ascending
    </Link>
  </div>
);

export default SideBar;
