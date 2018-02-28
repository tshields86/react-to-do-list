import React from 'react';

import classes from './Button.css';

const button = (props) => {
  const btnClasses = [classes.Button, classes[props.type]];
  return (
    <button
      className={btnClasses.join(' ')}
      onClick={() => props.clicked()}>
      {props.children}
    </button>
  )
};

export default button;