import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListClient from './ListClient/index';
import CreateClient from './CreateClient/index';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListClient} />

      <Route path="/create" component={CreateClient} />
    </Switch>
  );
}

export default Routes;
