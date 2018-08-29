import { Route, Redirect } from "react-router-dom";
import * as React from "react";
import * as Loadable from 'react-loadable';
import RouterData from "../Routes/RouterData";
import routerData from "../Routes/Router";

interface PrivateRouteProps {
  component: any;
  path: string;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("access_token") ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/account/login',
            state: { from: props.location }
          }}
        />
      )}
  />
);

const getComponent = (component: Promise<any>) => {
  return Loadable({
    loader: () => component,
    loading: () => null
  });
};

const getRoute = (routers: RouterData[], routes: JSX.Element[]): JSX.Element[] => {
  routers.map(x => {
    if (x.children.length === 0) {
      routes.push(
        <PrivateRoute path={x.path} key={x.key} component={getComponent(x.component)} />
      );
      return;
    }

    getRoute(x.children, routes);
  });

  return routes;
};

export const routeData = getRoute(routerData, []);
