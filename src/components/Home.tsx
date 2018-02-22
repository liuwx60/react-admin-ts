import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
// import Layout from './Layout/Layout';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/counter">counter</Link>
      </div>
    );
  }
}