import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons.jsx';
import style from './Keypad.scss';

const Keypad = (props) => {
  let test = ['+', '-', 'x', '/'];
 return (
   <div>
    <div className={style.allBtuContainer}>
      <div className={style.numContainer}>
        {props.numbers.map((num, idx) => {
          return <Buttons val={num} key={idx}/>
        })}
      </div>
      <div className={style.operatorContainer}>
        {test.map((op, idx) => {
          return <Buttons val={op} key={idx}/>
        })}
      </div>
      <div className={style.submit}>
        <Buttons val={'='}/>
      </div>
    </div>
   </div>
 ) 
};

Keypad.propTypes = {
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;
