import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator.jsx';
import Display from '../Display/Display.jsx';


describe('testing Calculator component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render the Display Component', () => {
    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />
    )).toEqual(true);
  });

  it ('check if the wrapper for Calculator component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('renders one div component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});