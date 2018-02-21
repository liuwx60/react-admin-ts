import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Counter from '../components/Counter';
import Login from '../views/Account/Login';

interface IfakeAuth {
  isAuthenticated: boolean;
}

const fakeAuth: IfakeAuth = {
  isAuthenticated: false
};

interface IprivateParams {
  // tslint:disable-next-line:no-any
  component: any;
  path: string;
}

const PrivateRoute = ({ component: Component, ...rest }: IprivateParams) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
  />
);

export const routes = (
  <Layout>
    <Route exact={true} path="/" component={Home}/>
    <PrivateRoute path="/counter" component={Counter}/>
    <Route path="/login" component={Login}/>
  </Layout>
);
