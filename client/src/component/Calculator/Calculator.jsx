import React from 'react';
import Display from '../Display/Display.jsx';
import Keypad from '../Keypad/Keypad.jsx';
import style from './Calculator.scss';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: '1', 
      numbers: [],
      operators: [],
      selectedVale: '',
      selectedOp: '',
    };

    this.setOperator = this.setOperator.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  setOperator() {
    console.log('setOperator');
  };

  updateDisplay() {
    console.log('updateDisplay');
  }

  
  render() {

    const {displayValue, numbers, operators } = this.state;

    return(
      <div>
        <span className={style.test}>hello</span>
        <Display displayValue={displayValue}/>
        <Keypad 
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    )
  }
}