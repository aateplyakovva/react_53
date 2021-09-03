/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>{props.title}</div>
      {props.tasks}
    </div>
  );
}

export default Card;
