import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons.jsx';
import { JestEnvironment } from '@jest/environment';

describe('Buttons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Buttons 
        keyAction={jest.fn()}
        keyType={'type'}
        keyValue={'value'}/>
      );
  });

  it ('check if the wrapper for Buttons component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('should render a div component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});