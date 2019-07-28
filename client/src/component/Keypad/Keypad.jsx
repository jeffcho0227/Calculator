import React from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => {
 return (
   <div>
     this is the keypad
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
