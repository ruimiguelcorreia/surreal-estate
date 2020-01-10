import React from 'react';
import { shallow } from 'enzyme';
import SavedProperties from '../../Components/SavedProperties';

describe('retrieves all the saved properties', () => {
  xit('should render correctly', () => {
    const component = shallow(<SavedProperties />);

    expect(component).toMatchSnapshot();
  });
});
