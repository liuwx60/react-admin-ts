import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Login.css';
import * as LoginStore from '../../store/Account/Login';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

type LoginProps = 
  LoginStore.LoginState
  & typeof LoginStore.actionCreators
  & RouteComponentProps<{}>;

class Login extends React.Component<LoginProps & FormComponentProps, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.props.submit(values);
        this.props.history.push('/counter');
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="form">
          <div className="logo">
            <span>React Admin</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.login,
  LoginStore.actionCreators
)(Form.create<LoginProps>()(Login));
