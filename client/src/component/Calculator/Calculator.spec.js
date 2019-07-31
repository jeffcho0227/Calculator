import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator.jsx';
import Keypad from '../Keypad/Keypad.jsx';
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

describe('mounted Calculator', () => {

  it('calls updateDisplay when a number key is clicked', () => {
    let wrapper = mount(<Calculator />);
    const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.numbers-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    
    // const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    // wrapper.instance().forceUpdate();
    // expect(spy).toHaveBeenCalledTimes(0);
    // wrapper.find('.numbers-key').first().simulate('click');
    // expect(spy).toHaveBeenCalledTimes(0);
  });

});