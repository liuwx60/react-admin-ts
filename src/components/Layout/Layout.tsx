import * as React from 'react';
import { Layout as AntdLayout, Menu, Breadcrumb, Icon } from 'antd';
import './Layout.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = AntdLayout;

export default class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <AntdLayout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">基础管理</Menu.Item>
            <Menu.Item key="2">微信管理</Menu.Item>
            <Menu.Item key="3">系统管理</Menu.Item>
          </Menu>
        </Header>
        <AntdLayout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="notification" />subnav 4</span>}>
                <Menu.Item key="19">option9</Menu.Item>
                <Menu.Item key="110">option10</Menu.Item>
                <Menu.Item key="111">option11</Menu.Item>
                <Menu.Item key="112">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" title={<span><Icon type="notification" />subnav 4</span>}>
                <Menu.Item key="191">option9</Menu.Item>
                <Menu.Item key="1101">option10</Menu.Item>
                <Menu.Item key="1111">option11</Menu.Item>
                <Menu.Item key="1121">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <AntdLayout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {this.props.children}
            </Content>
          </AntdLayout>
        </AntdLayout>
      </AntdLayout>
    );
  }
}