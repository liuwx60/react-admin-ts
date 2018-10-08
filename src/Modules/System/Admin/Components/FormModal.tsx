import { Modal, Form, Input } from "antd";
import * as React from "react";
import AdminProps from "../Props";
import { AdminDetail } from "../Store/State";

class FormModal extends React.Component<AdminProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title={this.props.adminDetail.id ? '编辑' : '添加'}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={() => this.props.toggleVisible(false)}
        okText="确定"
        cancelText="取消"
        maskClosable={false}
        okButtonProps={{
          loading: this.props.saving
        }}
        cancelButtonDisabled={this.props.saving}
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
      </Modal>
    );
  }

  private handleOk = () => {
    this.props.addOrEditAdmin(this.props.form.getFieldsValue() as AdminDetail);
  }
}

export default Form.create({
  mapPropsToFields(props: AdminProps) {
    let detail = {};

    Object.keys(props.adminDetail).map(x => {
      detail[x] = Form.createFormField({ value: props.adminDetail[x] });
    });

    return detail;
  }
})(FormModal);