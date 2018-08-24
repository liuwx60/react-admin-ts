import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routerData from '../../Routes/Router';
import IRouterData from '../../Routes/IRouterData';
const SubMenu = Menu.SubMenu;

export default class SiderMenu extends React.Component {
  public componentDidMount() {
    console.log('componentDidMount');
  }
  public getSubMenu = (router: IRouterData): JSX.Element => {
    return (
      <SubMenu key={router.key} title={
        <span>
          {router.icon ? (<Icon type={router.icon} />) : null}
          <span>{router.name}</span>
        </span>
      }>
        {
          router.children.map(item => {
            if (item.children.length === 0) {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.path} style={{ whiteSpace: 'normal' }}>{item.icon ? <Icon type={item.icon} /> : null}{item.name}</Link>
                </Menu.Item>
              );
            } else {
              return (this.getSubMenu(item));
            }
          })
        }
      </SubMenu>
    );
  }

  public getMenu = () => {
    let menus: JSX.Element[] = [];
    routerData.map(item => {
      if (item.children.length === 0) {
        menus.push((
          <Menu.Item key={item.key}>
            <Link to={item.path} style={{ whiteSpace: 'normal' }}>{item.icon ? <Icon type={item.icon} /> : null}{item.name}</Link>
          </Menu.Item>
        ));
      } else {
        menus.push(this.getSubMenu(item));
      }
    });

    return menus;
  }

  public render() {
    return (
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {this.getMenu().map(item => item)}
      </Menu>
    );
  }
}