import React from 'react';
import style from './Buttons.scss';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  console.log(props.keyAction);
  return(
    <div className={style.buttonsContainer}>
        <p>
          {props.val}
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