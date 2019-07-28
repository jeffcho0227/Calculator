import React from 'react';

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
        this is from Calculator;
      </div>
    )
  }
}