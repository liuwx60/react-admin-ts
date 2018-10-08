import { Drawer, Form, Input } from "antd";
import * as React from "react";
import { FormComponentProps } from "antd/lib/form";

interface DrawerFormProps extends FormComponentProps {
  onCloseForm: () => void;
  formTitle: string;
  visible: boolean;
}

class DrawerForm extends React.Component<DrawerFormProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Drawer
        title={this.props.formTitle}
        width={720}
        placement="right"
        onClose={this.props.onCloseForm}
        visible={this.props.visible}
      >
        <Form>
          <Form.Item label="用户名">
            {getFieldDecorator('username')(<Input />)}
          </Form.Item>
          <Form.Item label="昵称">
            {getFieldDecorator('nickName')(<Input />)}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email')(<Input />)}
          </Form.Item>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create()(DrawerForm);