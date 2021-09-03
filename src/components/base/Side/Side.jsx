import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-router-dom';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.a} to="/">
            Kanban board
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.a} to="/about">
            About
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.a} to="/users">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Side;
