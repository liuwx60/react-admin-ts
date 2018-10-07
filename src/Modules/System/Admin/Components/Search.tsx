import * as React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import AdminProps from "../Props";
import { SearchData } from "../Store/State";

class Search extends React.Component<AdminProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
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
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.handleSearch();
  }

  private handleReset = () => {
    this.props.form.resetFields();
    this.handleSearch();
  }

  private handleSearch() {
    let searchdata = this.props.form.getFieldsValue() as SearchData;
    this.props.assignSearchData(searchdata);
  }
}

export default Form.create()(Search);