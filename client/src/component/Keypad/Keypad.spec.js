import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad.jsx';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import { JestEnvironment } from '@jest/environment';

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad 
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />);
  });

  it('should render a div component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});