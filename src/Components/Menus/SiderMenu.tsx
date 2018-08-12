import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routerData, { IRouterData } from '../../Routes/Router';
const SubMenu = Menu.SubMenu;

export default class SiderMenu extends React.Component {
  public getSubMenu = (router: IRouterData): JSX.Element => {
    return (
      <SubMenu title={
        <span>
          {router.icon ? (<Icon type={router.icon} />) : null}
          <span>{router.name}</span>
        </span>
      }>
        {
          router.children.map(item => {
            if (item.children.length === 0) {
              return (
                <Menu.Item>
                  {item.icon ? <Icon type={item.icon} /> : null}
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              );
            } else {
              return (this.getSubMenu(item));
            }
          })
        }
      </SubMenu>
    )
  }

  public getMenu = () => {
    let menus: JSX.Element[] = [];
    routerData.map(item => {
      if (item.children.length === 0) {
        menus.push((
          <Menu.Item>
            {item.icon ? <Icon type={item.icon} /> : null}
            <Link to={item.path}>{item.name}</Link>
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {this.getMenu().map(item => item)}
      </Menu>
    )
  }
}