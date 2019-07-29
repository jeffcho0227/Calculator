import React from 'react';
import PropTypes from 'prop-types';
import style from './Display.scss';

const Display = ({ displayValue }) => {
  console.log(displayValue);
  return(
    <div className={style.displayContainer}>
      <div className={style.displayMain}>
        <div className={style.displayNum}>
          this is the display;
        </div>
      </div>
      <div className={style.displayLine}></div>
    </div>
  )
};

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;