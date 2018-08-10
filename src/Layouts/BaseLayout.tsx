import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../Views/Account/Login';
import './BaseLayout.css';

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

export default class BaseLayout extends React.Component<{}, IBaseLayoutState> {

  public state = {
    collapsed: false
  };

  public toggle = () => {
    this.state.collapsed = !this.state.collapsed;
    this.setState(this.state);
  }

  public render() {
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
              <PrivateRoute path="/home" component={Login}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}