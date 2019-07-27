const React = require( 'react');
const renderer = require( 'react-test-renderer');
const enzyme = require('enzyme');
const App = require( './App.jsx');

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
})