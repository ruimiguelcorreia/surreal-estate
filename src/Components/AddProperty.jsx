import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import Alert from './Alert';

import '../Styles/AddProperty.css';
import img from '../img/add-property-bkg.jpg';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        username: '',
        title: '',
        type: 'Flat',
        city: 'Manchester',
        bedrooms: 1,
        bathrooms: 1,
        price: 0,
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = event => {
    const { fields } = this.state;

    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    const data = fields;

    Axios.post('http://localhost:3000/api/v1/PropertyListing', data)
      .then(response => {
        console.log(response);
        this.setState({
          isSuccess: true,
          alertMessage: 'Property added successfully!',
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isError: true,
          alertMessage: 'Please try again later!',
        });
      });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: ['bedrooms', 'bathrooms', 'price'].includes(event.target.name)
          ? parseInt(event.target.value, 10)
          : event.target.value,
      },
    });
  };

  render() {
    const { isError, isSuccess, alertMessage } = this.state;
    const { title, type, city, bedrooms, bathrooms, price, email } = this.state.fields;

    return (
      <div className="AddPropertyContainer">
        <img src={img} alt="background" className="add-property-bkg" />
        <form onSubmit={this.handleAddProperty} className="add-property-form">
          <fieldset>
            <legend>Description</legend>
            <input
              name="title"
              type="text"
              className="description-box"
              value={title}
              onChange={this.handleFieldChange}
              placeholder="Stunning 2 bedroom flat"
            />
          </fieldset>

          <div className="form-line-two">
            <label>
              <select
                name="type"
                value={type}
                onChange={this.handleFieldChange}
                className="drop-selection"
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>

            <label>
              <select
                name="city"
                value={city}
                onChange={this.handleFieldChange}
                className="drop-selection"
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Sheffield">Sheffield</option>
              </select>
            </label>
          </div>

          <div className="form-line-three">
            <div className="beds-container">
              <label>
                <FontAwesome className="fas fa-bed" />
              </label>
              <input
                type="range"
                min={1}
                max={5}
                steps={1}
                name="bedrooms"
                className="bedrooms-slider"
                value={bedrooms}
                onChange={this.handleFieldChange}
              />
            </div>

            <div className="baths-container">
              <label>
                <FontAwesome className="fas fa-bath" />
              </label>
              <input
                type="range"
                min={1}
                max={5}
                steps={1}
                name="bathrooms"
                value={bathrooms}
                onChange={this.handleFieldChange}
              />
            </div>
          </div>
          <label className="range-label">
            <FontAwesome className="fas fa-tags" />
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleFieldChange}
              className="input-box"
            />
          </label>

          <label>
            <FontAwesome className="fas fa-envelope" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleFieldChange}
              placeholder="email@email.com"
              className="input-box"
            />
          </label>

          <button type="submit" className="add-prop-button">
            Add Property
          </button>

          {isError && <Alert message={alertMessage} />}
          {isSuccess && <Alert message={alertMessage} success />}
        </form>
      </div>
    );
  }
}

export default AddProperty;
