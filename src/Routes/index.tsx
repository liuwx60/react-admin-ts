import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseLayout from '../Components/Layouts/BaseLayout';
import Login from '../Modules/Account/Login';

export class Layout extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/account/login" component={Login}/>
        <Route path="/" component={BaseLayout}/>
      </Switch>
    );
  }
}

export const routes = (
  <div>
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  </div>
);