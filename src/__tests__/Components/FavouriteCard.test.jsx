import React from 'react';
import { shallow } from 'enzyme';
import FavouriteCard from '../../Components/FavouriteCard';

describe('renders a favourite card', () => {
  xit('renders a favourite card with its properties', () => {
    const wrapper = shallow(
      <FavouriteCard
        title="mockTitle"
        city="mockCity"
        bedrooms="mockBedrooms"
        bathrooms="mockBathrooms"
        price="mockPrice"
        email="mockEmail"
      />,
    );

    expect(wrapper.find('.favourite-title').text()).toBe('mockTitle');
    expect(wrapper.find('.favourite-city').text()).toBe('mockCity');
    expect(wrapper.find('.favourite-bedrooms').text()).toBe('mockBedrooms');
    expect(wrapper.find('.favourite-bathrooms').text()).toBe('mockBathrooms');
    expect(wrapper.find('.favourite-price').text()).toBe('mockPrice');
    expect(wrapper.find('.favourite-email').text()).toBe('mockEmail');
  });
});

/*

Install the dependencies. (Enzyme)
- Check node_modules & package-json.

Have the test coverage:
package.json => scripts: test (add - --coverage)
We can also add --verbose

exists().toBe(true)
exists().toBeTruthy();
To check if it renders.

console.log(wrapper.html());
To find what's inside of the component.

*/
