import React from 'react';
import { shallow, mount } from 'enzyme';
import AddProperty from '../../Components/AddProperty';

test('it renders correctly', () => {
  const wrapper = shallow(<AddProperty />);

  expect(wrapper.exists()).toBe(true);
});

test('it renders an input field', () => {
  const wrapper = shallow(<AddProperty />);
  const input = wrapper.find('.description-box');

  expect(input.exists()).toBe(true);
});

test('it renders an empty input field upon starting', () => {
  const wrapper = shallow(<AddProperty />);
  const input = wrapper.find('.description-box');
  const { value } = input.props();

  expect(value).toBe('');
});

test('it grabs the input field value', () => {
  const wrapper = mount(<AddProperty />);

  wrapper
    .find('.description-box')
    .simulate('change', { target: { name: 'title', value: 'hello' } });
  wrapper.update();

  const input = wrapper.find('.description-box');

  expect(input.props().value).toBe('hello');
});
