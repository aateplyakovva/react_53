import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Switch, Route } from 'react-router-dom';
import styles from './styles';
import Kanban from '../../pages/Kanban';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/kanban">
          <Kanban />
        </Route>
        <Route path="/3">3rd page</Route>
        <Route path="/4">4th page</Route>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
}

export default Main;
