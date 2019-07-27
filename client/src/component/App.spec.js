import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from'enzyme';
import App from './App.jsx';

describe('testing App component', ()=> {
  // it('renders three <Foo /> components', () => {
  //   const wrapper = enzyme.shallow(<App />);
  //   expect(wrapper.find(App)).to.have.lengthOf(1);
  // });
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('knows that 3 and 2 make 4', () => {
    expect(3 + 2).toBe(5);
  });

  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

});