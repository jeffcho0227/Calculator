import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator.jsx';


describe('testing Calculator component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  })

  it ('check if the wrapper for Calculator component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('renders one div component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});