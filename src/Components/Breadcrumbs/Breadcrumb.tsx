import * as React from "react";
import { Breadcrumb as AntdBreadcrumb, Icon } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import routerData from '../../Routes/Router';

export default class Breadcrumb extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return <AntdBreadcrumb>{this.getBreadecrumb()}</AntdBreadcrumb>;
  }
  private getBreadecrumb() {
    let breadcrumbs: JSX.Element[] = [];
    let router = routerData;

    while (router.length > 0) {
      let current = router.find(x => this.props.location.pathname.indexOf(x.path) === 0);
      if (!current) {
        break;
      }
      breadcrumbs.push(
        <AntdBreadcrumb.Item key={current.key}>
          {current.icon ? <Icon type={current.icon} /> : null}
          <span>{current.name}</span>
        </AntdBreadcrumb.Item>
      );

      router = current.children;
    }

    return breadcrumbs;
  }
}