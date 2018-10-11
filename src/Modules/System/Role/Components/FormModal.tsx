import { Modal, Form, Input } from "antd";
import * as React from "react";
import RoleProps from "../Props";
import { RoleDetail } from "../Store/State";

class FormModal extends React.Component<RoleProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title={this.props.roleDetail.id ? '编辑' : '添加'}
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
          <Form.Item label="名称">
            {getFieldDecorator('name')(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  private handleOk = () => {
    this.props.addOrEditRole(this.props.form.getFieldsValue() as RoleDetail);
  }
}

export default Form.create({
  mapPropsToFields(props: RoleProps) {
    let detail = {};

    Object.keys(props.roleDetail).map(x => {
      detail[x] = Form.createFormField({ value: props.roleDetail[x] });
    });

    return detail;
  }
})(FormModal);