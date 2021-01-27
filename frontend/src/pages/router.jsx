import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListClient from './ListClient/index';

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={ListClient} />
    </Switch>
  );
}

export default Routes;