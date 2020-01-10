import React from 'react';
import Enzyme from 'enzyme';

import Alert from '../../Components/Alert';

describe('renders a message', () => {
  it('renders an error message', () => {
    const wrapper = Enzyme.shallow(<Alert message="Error!" />);

    expect(wrapper.find('.Alert').text()).toBe('Error!');
  });

  it('renders a success message', () => {
    const wrapper = Enzyme.shallow(<Alert message="Success!" success />);

    expect(wrapper.find('.Alert.success').text()).toBe('Success!');
  });
});
