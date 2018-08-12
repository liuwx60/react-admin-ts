import * as React from 'react';
import { Menu } from 'antd';
import routerData from '../../Routes/Router';
const SubMenu = Menu.SubMenu;

export default class SiderMenu extends React.Component {
  public getMenu = () => {
    let menus: JSX.Element[] = [];
    routerData.map(item => {
      if (item.children.length === 0) {
        menus.push((
          <Menu.Item>
            {item.name}
          </Menu.Item>
        ));
      } else {
        let router = item;
        while (router.children.length > 0) {
          let subMenu: JSX.Element[] = [];
  
          router.children.map(x => {
            if (x.children.length === 0) {
              subMenu.push((
                <Menu.Item>
                  {x.name}
                </Menu.Item>
              ));
            }
  
            router = x;
          });
  
          menus.push((
            <SubMenu title={router.name}>
              {subMenu.map(x => (x))}
            </SubMenu>
          ));
        }
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