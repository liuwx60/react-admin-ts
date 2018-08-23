import { Card, Col, Icon, Row } from 'antd';
import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as React from 'react';
import BasicDonut from '../../Components/Viser/BasicDonut';

export default class Analysis extends React.Component {
  public render() {

    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
    };

    const data = [
      { month: '1 月', sales: 38 },
      { month: '2 月', sales: 52 },
      { month: '3 月', sales: 61 },
      { month: '4 月', sales: 145 },
      { month: '5 月', sales: 48 },
      { month: '6 月', sales: 38 },
      { month: '7 月', sales: 76 },
      { month: '8 月', sales: 97 },
      { month: '9 月', sales: 155 },
      { month: '10 月', sales: 132 },
      { month: '11 月', sales: 65 },
      { month: '12 月', sales: 77 },
    ];

    const scale = [{
      dataKey: 'sales',
      tickInterval: 20,
    }];

    return (
      <React.Fragment>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Card bordered={false}>
              <div className="card-container">
                <div className="icon">
                  <Icon type="red-envelope" style={{ fontSize: '54px', color: '#f69899' }}/>
                </div>
                <div className="content">
                  <div>红包</div>
                  <div className="num">2,473</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card bordered={false}>
              <div className="card-container">
                <div className="icon">
                  <Icon type="user" style={{ fontSize: '54px', color: '#8dc9fd' }}/>
                </div>
                <div className="content">
                  <div>用户</div>
                  <div className="num">2,473</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card bordered={false}>
              <div className="card-container">
                <div className="icon">
                  <Icon type="share-alt" style={{ fontSize: '54px', color: '#d897ed' }}/>
                </div>
                <div className="content">
                  <div>分享</div>
                  <div className="num">2,473</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card bordered={false}>
              <div className="card-container">
                <div className="icon">
                  <Icon type="shopping-cart" style={{ fontSize: '54px', color: '#61ea8e' }}/>
                </div>
                <div className="content">
                  <div>订单</div>
                  <div className="num">2,473</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Card bordered={false} title="销售额">
              <Chart forceFit={true} height={400} data={data} scale={scale} padding={[10, 40, 40, 40]}>
                <Tooltip />
                <Axis />
                <Bar position="month*sales" />
              </Chart>
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: '24px' }}>
          <Col span={8}>
            <Card bordered={false}>
              <BasicDonut/>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <BasicDonut/>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <BasicDonut/>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}