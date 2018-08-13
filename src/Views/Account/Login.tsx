import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Login.css';
import { RouteComponentProps } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

type LoginProps = 
FormComponentProps
  & RouteComponentProps<{}>;

class Login extends React.Component<LoginProps, {}> {
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(values);
        localStorage.setItem("access_token", "123");
        this.props.history.push('/dashboard/analysis2');
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

export default Form.create<LoginProps>()(Login);
