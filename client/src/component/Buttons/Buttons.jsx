import React from 'react';
import style from './Buttons.scss';
import PropTypes from 'prop-types';

const Buttons = ({ keyAction, keyType, keyValue}) => {
  return(
    <div className={`${style.buttonsContainer} ${keyType}`}
          onClick={() => keyAction(keyValue)}>
        <p>
          { keyValue }
        </p>
    </div>
  )
};

Buttons.propTypes= {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
}

export default Buttons;