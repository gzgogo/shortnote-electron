/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from 'containers/App';
import NotesPage from 'containers/NotesPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={NotesPage} />
      <Route path="/" component={NotesPage} />
    </Switch>
  </App>
);
