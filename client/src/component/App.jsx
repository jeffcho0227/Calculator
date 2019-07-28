import React from 'react';
import Calculator from './Calculator/Calculator.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    // console.log('here');
    return(
      <div>
        hello from React 2222
          <Calculator />
      </div>
    )
  }
}

export default App;