import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home';
import Counter from '../components/Counter';
import Login from '../views/Account/Login';

// interface IfakeAuth {
//   isAuthenticated: boolean;
// }

// const accessToken: string = localStorage.access_token || '';

// const fakeAuth: IfakeAuth = {
//   isAuthenticated: accessToken.length > 0
// };

interface PrivateRouteParams {
  component: any;
  path: string;
}

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
      <Route exact={true} path="/" component={Home}/>
      <PrivateRoute path="/counter" component={Counter}/>
      <Route path="/login" component={Login}/>
    </Layout>
  </div>
);
