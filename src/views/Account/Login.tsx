import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';

const FormItem = Form.Item;

interface LoginState {
  form: {
    userName: string,
    passWord: string
  };
}

class Login extends React.Component<{}, LoginState> {
  constructor() {
    super({});
    this.state = {
      form: {
        userName: '',
        passWord: ''
      }
    };
  }

  handleChange(event: { target: { value: string; }; }) {
    this.setState({
      form: {
        userName: event.target.value,
        passWord: ''
      }
    });
  }

  public render() {
    return (
      <div className="form">
        <Form className="login-form">
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={this.state.form.userName}
              // tslint:disable-next-line:jsx-alignment
              />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={this.state.form.passWord}
              // tslint:disable-next-line:jsx-alignment
              />
          </FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="#">Forgot password</a>
            <Button type="primary" className="login-form-button">
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Login;
