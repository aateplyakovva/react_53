import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Switch, Route } from 'react-router-dom';
import styles from './styles';
import Cards from './Cards';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      {/* <Cards /> */}
      <Switch>
        <Route path="/about">lorem1</Route>
        <Route path="/users">lorem2</Route>
        <Route path="/">
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
