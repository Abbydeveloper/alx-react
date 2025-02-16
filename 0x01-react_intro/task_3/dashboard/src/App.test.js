import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App component renders without crashing', () => {
  const contain = shallow(<App />);
  expect(contain.exists()).toBe(true);
});

test('App renders with a div with the class name App-header', () => {
  const contain = shallow(<App />);
  expect(contain.find('.App-header').length).toBe(1);
});


test('App renders with a div with the class name App-body', () => {
  const contain = shallow(<App />);
  expect(contain.find('.App-body').length).toBe(1);
});

test('App renders with a div with the class name App-footer', () => {
  const contain = shallow(<App />);
  expect(contain.find('.App-footer').length).toBe(1);
});