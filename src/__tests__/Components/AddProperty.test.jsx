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
  const wrapper = shallow(<AddProperty />);

  wrapper
    .find('.description-box')
    .simulate('change', { target: { name: 'title', value: 'mockTitle' } });

  const input = wrapper.find('.description-box');

  expect(input.props().value).toBe('mockTitle');
});

test('it grabs the type value according to what is selected', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper
    .find('.drop-selection')
    .first()
    .simulate('change', { target: { name: 'type', value: 'mockType' } });

  const input = wrapper.find('.drop-selection').first();

  expect(input.props().value).toBe('mockType');
});

test('it grabs the city value according to what is selected', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper
    .find('.drop-selection')
    .at(1)
    .simulate('change', { target: { name: 'city', value: 'mockCity' } });

  const input = wrapper.find('.drop-selection').at(1);

  expect(input.props().value).toBe('mockCity');
});

test('it grabs the number of bedrooms from the slider', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper.find('.bedrooms-slider').simulate('change', { target: { name: 'bedrooms', value: 1 } });

  const input = wrapper.find('.bedrooms-slider');

  expect(input.props().value).toBe(1);
});

test('it grabs the number of bathrroms from the slider', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper.find('.bathrooms-slider').simulate('change', { target: { name: 'bathrooms', value: 1 } });

  const input = wrapper.find('.bathrooms-slider');

  expect(input.props().value).toBe(1);
});

test('it grabs the price from the input', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper
    .find('.input-box')
    .first()
    .simulate('change', { target: { name: 'price', value: 100000 } });

  const input = wrapper.find('.input-box').first();

  expect(input.exists()).toBe(true);
  expect(input.props().value).toBe(100000);
});

test('it grabs the email from the input', () => {
  const wrapper = shallow(<AddProperty />);

  wrapper
    .find('.input-box')
    .at(1)
    .simulate('change', { target: { name: 'email', value: 'mockEmail' } });

  const input = wrapper.find('.input-box').at(1);

  expect(input.exists()).toBe(true);
  expect(input.props().value).toBe('mockEmail');
});

test('it triggers the action once the button is clicked', () => {
  const wrapper = mount(<AddProperty {...props} />);

  const props = { handleAddProperty: jest.fn() };

  wrapper.find('button').simulate('click');

  const input = wrapper.find('.add-prop-button');

  expect(props.handleAddProperty).toHaveBeenCalled();
});
