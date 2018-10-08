import { Modal, Form, Input } from "antd";
import * as React from "react";
import AdminProps from "../Props";

interface FormModalProps extends AdminProps {
  onCloseForm: () => void;
  formType: 'add' | 'edit';
  visible: boolean;
}

class FormModal extends React.Component<FormModalProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title={this.props.formType === 'add' ? '添加' : '编辑' }
        visible={this.props.visible}
        onOk={this.props.onCloseForm}
        onCancel={this.props.onCloseForm}
        okText="确定"
        cancelText="取消"
        maskClosable={false}
      >
        <Form>
          <Form.Item label="用户名">
            {getFieldDecorator('username')(<Input defaultValue={this.props.adminDetail.username} />)}
          </Form.Item>
          <Form.Item label="昵称">
            {getFieldDecorator('nickName')(<Input defaultValue={this.props.adminDetail.nickName} />)}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email')(<Input defaultValue={this.props.adminDetail.email} />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(FormModal);