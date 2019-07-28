import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from'enzyme';
import App from './App.jsx';
import Calculator from './Calculator/Calculator.jsx';

describe('testing App component', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('check if the wrapper for App component exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one div component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});