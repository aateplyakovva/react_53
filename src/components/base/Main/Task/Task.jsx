import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Task() {
  return (
    <div className={classes.task}>
      <div className={classes.taskHeader}>
        <p className={classes.taskTitle}>Title</p>
      </div>
      <p className={classes.taskDescr}>Description</p>
      <p className={classes.taskRespons}>Responsible</p>
    </div>
  );
}

export default Task;
