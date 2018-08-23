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
      for (let item of router) {
        if (this.props.location.pathname.indexOf(item.path) === 0) {
          breadcrumbs.push(
            <AntdBreadcrumb.Item key={item.key}>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.name}</span>
            </AntdBreadcrumb.Item>
          );
          router = item.children;
          break;
        }
      }
    }

    return breadcrumbs;
  }
}