import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from './utils';

// Mocking the getLatestNotification function
jest.mock('./utils', () => ({
    getLatestNotification: jest.fn(() => '<strong>Urgent requirement</strong> - complete by EOD')
}));

test('Notification renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

test('Notification renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
});

test('Notification renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});