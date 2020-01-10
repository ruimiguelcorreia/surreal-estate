import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../Components/PropertyCard';

describe('renders a property card', () => {
  xit('renders a property card with ad properties', () => {
    const wrapper = shallow(
      <PropertyCard
        title="mockTitle"
        type="mockType"
        city="mockCity"
        bedrooms="mockBedrooms"
        bathrooms="mockBathrooms"
        price="mockPrice"
        email="mockEmail"
      />,
    );

    expect(wrapper.find('.card-title').text()).toBe('mockTitle');
    expect(wrapper.find('.card-type').text()).toBe('mockType');
    expect(wrapper.find('.card-city').text()).toBe('mockCity');
    expect(wrapper.find('.card-bedrooms').text()).toBe('mockBedrooms');
    expect(wrapper.find('.card-bathrooms').text()).toBe('mockBathrooms');
    expect(wrapper.find('.card-price').text()).toBe('mockPrice');
    expect(wrapper.find('.card-email').text()).toBe('mockEmail');
  });
});
