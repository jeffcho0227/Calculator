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
      storedValue: '',
      selectedOp: '',
    };

    this.setOperator = this.setOperator.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.callOperator = this.callOperator.bind(this);
  }

  setOperator(value) {
    let { displayValue, selectedOp, storedValue } = this.state;

    if (selectedOp === '') {
      storedValue = displayValue;
      displayValue = '0';
      selectedOp = value;
    } else {
      selectedOp = value;
    }

    this.setState({ displayValue, selectedOp, storedValue }, () => console.log(this.state));
  };

  updateDisplay(val) {
    let { displayValue } = this.state;

    if (val === '.' && displayValue.includes('.')) val = '';

    if (val === 'ce') {
      displayValue = displayValue.substr(0, displayValue.length - 1);
      if (displayValue === '') displayValue = '0';
    } else {
      displayValue === '0' ? (displayValue = val) : (displayValue += val);
    }

    this.setState({ displayValue });
  };

  callOperator() {
    let { displayValue, selectedOp, storedValue } = this.state;
    let updateStoredValue = displayValue;

    displayValue = parseInt(displayValue, 10);
    storedValue = parseInt(storedValue, 10);

    switch(selectedOp) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case 'x':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default: 
        displayValue = '0';
    }

    displayValue = displayValue.toString();
    selectedOp = '';
    if (displayValue === 'NaN' || displayValue === 'Infinity') {
      displayValue = '0';
    }

    this.setState({ displayValue, selectedOp , storedValue: updateStoredValue })
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
          callOperator={this.callOperator}
        />
      </div>
    )
  }
}