import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Card from './Card';
import Task from '../Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Cards() {
  return (
    <div className={classes.cards}>
      <Card tasks={<Task />} title="Backlog" />
      <Card tasks={<Task />} title="In progress" />
      <Card tasks={<Task />} title="Review" />
      <Card tasks={<Task />} title="Complete" />
    </div>
  );
}

export default Cards;
