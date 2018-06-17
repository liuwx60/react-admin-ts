import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import Layout from '../components/Layout/Layout';
import Counter from '../components/Counter';
import Login from '../views/Account/Login';

interface PrivateRouteParams {
  component: any;
  path: string;
}

const home = Loadable({
  loader: () => import('../components/Home'),
  loading: (() => null)
});

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteParams) => (
  <Route
    {...rest}
    render={props =>
      localStorage.access_token ? (
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
  <div style={{ height: '100%' }}>
    <Layout>
      <Route exact={true} path="/" component={home}/>
      <PrivateRoute path="/counter" component={Counter}/>
      <Route path="/login" component={Login}/>
    </Layout>
  </div>
);
