import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/SideBar.css';

const SideBar = ({ buildQueryString }) => (
  <div className="SideBar">
    <Link to={buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
    <Link to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
    <Link to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
    <Link to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
    <Link to={buildQueryString('sort', { price: -1 })}>Price Descending</Link>
    <Link to={buildQueryString('sort', { price: 1 })}>Price Ascending</Link>
  </div>
);

export default SideBar;
