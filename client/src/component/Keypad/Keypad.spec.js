import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Keypad from './Keypad.jsx';

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
    expect(wrapper.find('div').length).toEqual(5);
  });

  // it('renders the values of numbers', () => {
  //   wrapper.setProps({numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']});
  //   expect(wrapper.find('.btnContainer').text()).toEqual('0123456789');
  // });
});

describe('mounted Keypad', () => {

  // let wrapper;

  // beforeEach(() => {
  //   const wrapper = mount(
  //       <Keypad
  //         // callOperator={jest.fn()}
  //         numbers={[]}
  //         setOperator={jest.fn()}
  //         // updateDisplay={jest.fn()}
  //       />
  //   )
  // });

  it('renders the values of numbers', () => {
    let wrapper = mount(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    )

    wrapper.setProps({
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'C']
    });
    expect(wrapper.find('.numContainer').text()).toEqual('1234567890.C');
  });

  it(`renders the values of operatros`, () => {
    let wrapper = mount(
      <Keypad
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    />
    )

  wrapper.setProps({
      operators: ['+', '-', 'x', '/']
  });
  expect(wrapper.find('.operatorContainer').text()).toEqual('+-x/');
  })

});