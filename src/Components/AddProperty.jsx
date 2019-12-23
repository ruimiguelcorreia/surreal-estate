import React, { Component } from 'react';
import Axios from 'axios';

import Alert from './Alert';

import '../Styles/AddProperty.css';

class AddProperty extends Component {
  state = {
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

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    console.log(this.state.fields);
    const data = this.state.fields;
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
    return (
      <div className="add-property-container">
        Add a Property
        <form onSubmit={this.handleAddProperty}>
          <label>
            Brief Description:
            <input
              name="title"
              type="text"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
              placeholder="Stunning 2 bedroom flat"
            />
          </label>

          <label>
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
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
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Sheffield">Sheffield</option>
            </select>
          </label>

          <label>
            No. Bedrooms:
            <input
              type="range"
              min={1}
              max={5}
              steps={1}
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
            />
          </label>

          <label>
            No. Bathrooms:
            <input
              type="range"
              min={1}
              max={5}
              steps={1}
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
              placeholder="email@email.com"
            />
          </label>

          <button type="submit">Add Property</button>

          {this.state.isError && <Alert message={this.state.alertMessage} />}
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        </form>
      </div>
    );
  }
}

export default AddProperty;
