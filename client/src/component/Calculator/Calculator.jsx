import React from 'react';
import Display from '../Display/Display.jsx';
import Keypad from '../Keypad/Keypad.jsx';
import style from './Calculator.scss';
import Buttons from '../Buttons/Buttons.jsx';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0', 
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'C'],
      operators: ['+', '-', 'x', '/'],
      selectedVals: '',
      selectedOp: '',
    };

    this.setOperator = this.setOperator.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.callOperator = this.callOperator.bind(this);
  }

  setOperator() {
    console.log('setOperator');
  };

  updateDisplay(val) {
    let { displayValue } = this.state;
    if (val === '.' && displayValue.includes('.')) {
      value = '';
    }

    if (val === 'ce') {
      displayValue = displayValue.substr(0, displayValue.length -1);
      if (displayValue === '') {
        displayValue = '0';
      }
    } else {
      displayValue === '0' ? displayValue = val : displayValue += val;
    }

    this.setState({ displayValue });
  };

  callOperator() {
    console.log('called Operator')
  }

  
  render() {

    const {displayValue, numbers, operators } = this.state;

    return(
      <div>
        <Display displayValue={displayValue}/>
        <Keypad 
          numbers={numbers}
          operators={this.state.operatros}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    )
  }
}