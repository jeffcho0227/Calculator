import React from 'react';
import Display from './Display.jsx';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0', 
      numbers: [],
      operators: [],
      selectedVale: '',
      selectedOp: '',
    };
  }

  render() {
    return(
      <div>
        <Display />
        this is from Calculator
      </div>
    )
  }
}