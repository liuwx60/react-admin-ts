import * as React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import AdminProps from "../Props";

class Search extends React.Component<AdminProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="用户名">
              {getFieldDecorator('username')(<Input />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="昵称">
              {getFieldDecorator('nickName')(<Input />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <span className="search-col">
              <Button type="primary" htmlType="submit">搜索</Button>
              <Button style={{ marginLeft: 8 }}>重置</Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(Search);