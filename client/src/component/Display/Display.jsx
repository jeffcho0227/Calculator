import React from 'react';
import PropTypes from 'prop-types';
import style from './Display.scss';

const Display = ({ displayValue }) => {
  console.log(displayValue);
  return(
    <div>
      {/* { displayValue } */}
      this is the display;
    </div>
  )
};

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;