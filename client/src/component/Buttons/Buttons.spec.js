import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons.jsx';

describe('Buttons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Buttons />);
  });

  it ('check if the wrapper for Buttons component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('should render a div component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});