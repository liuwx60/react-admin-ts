import { Icon, Layout, Menu, Badge, Avatar, Dropdown } from 'antd';
import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import routerData from '../Routes/Router';
import IRouterData from '../Routes/IRouterData';
import './BaseLayout.css';
import logo from '../logo.svg';
import antdlogo from '../Assets/svg/logo.svg';
import SiderMenu from '../Components/Menus/SiderMenu';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import { RouteComponentProps } from 'react-router-dom';

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
};

const getRouterData = () => {
  let routers: IRouterData[] = [];
  routerData.map(item => {
    if (item.children.length === 0) {
      routers.push(item);
      return;
    }
    let router = item;
    while (router.children.length > 0) {
      router.children.map(x => {
        if (x.children.length === 0) {
          routers.push(x);
        }
        router = x;
      });
    }
  });

  return routers;
};

export default class BaseLayout extends React.Component<RouteComponentProps<{}>, IBaseLayoutState> {

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
                {getRouterData().map(item => (
                  <PrivateRoute path={item.path} key={item.key} component={getComponent(item.component)}/>
                ))}
                <Redirect path="*" to="/dashboard/analysis2" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}