import { Avatar, Badge, Dropdown, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { Redirect, RouteComponentProps, Switch } from 'react-router-dom';
import antdlogo from '../Assets/svg/logo.svg';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import SiderMenu from '../Components/Menus/SiderMenu';
import logo from '../logo.svg';
import './BaseLayout.css';
import { routeData } from '../Utils/Router';

const { Header, Sider, Content } = Layout;

interface BaseLayoutState {
  collapsed: boolean
}

export default class BaseLayout extends React.Component<RouteComponentProps<{}>, BaseLayoutState> {

  public state = {
    collapsed: false
  };

  public toggle = () => {
    this.state.collapsed = !this.state.collapsed;
    this.setState(this.state);
  }

  public render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="user"/> 个人中心
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className="sider-logo">
            <img src={antdlogo} />
            {this.state.collapsed ? null : (<span>REACT ADMIN</span>)}
          </div>
          <SiderMenu />
        </Sider>
        <Layout style={{ height: '100vh' }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className="header-container">
              <div>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </div>
              <div className="header-action">
                <div>
                  <Badge count={5}>
                    <Icon type="bell" style={{ fontSize: '16px', padding: '4px' }}/>
                  </Badge>
                </div>
                <div>
                  <Dropdown overlay={menu}>
                    <div className="user">
                      <Avatar src={logo} style={{ width: '24px', height: '24px' }}/>
                      <span className="username">Guest</span>
                    </div>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Header>

          <Content style={{ padding: '16px', overflow: 'hidden', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <Breadcrumb {...this.props}/>

            <div style={{ backgroundColor: '#fff', flex: 1, marginTop: '12px' }}>
              <Switch>
                {routeData}
                <Redirect path="*" to="/dashboard" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}