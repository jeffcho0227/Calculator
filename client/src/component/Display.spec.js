import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display.jsx';

describe('Display', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Display />);
  });

  it ('check if the wrapper for Calculator component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('should render a div component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
});