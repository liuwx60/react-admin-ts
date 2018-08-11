import { Icon, Layout, Menu, Badge, Avatar, Dropdown } from 'antd';
import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import routerData from '../Routes/Router';
import Login from '../Views/Account/Login';
import './BaseLayout.css';
import logo from '../logo.svg';

const { Header, Sider, Content } = Layout;

interface IBaseLayoutState {
  collapsed: boolean
}

interface IPrivateRouteParams {
  component: any;
  path: string;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRouteParams) => (
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
}

export default class BaseLayout extends React.Component<{}, IBaseLayoutState> {

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
    )
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
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
          <Content style={{ padding: '24px 16px', overflow: 'hidden', overflowY: 'auto' }}>
            <Switch>
              {routerData.map(item => (
                <Route path={item.path} key={item.key} component={getComponent(item.component)}/>
              ))}
              <PrivateRoute path="/home" component={Login}/>
              <Redirect path="*" to="/dashboard/analysis"/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}