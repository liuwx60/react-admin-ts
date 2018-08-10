import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IApplicationState } from '../../Store';
import * as CounterStore from '../../Store/Counter';

type CounterProps = 
  CounterStore.ICounterState
  & typeof CounterStore.actionCreators
  & RouteComponentProps<{}>;

class Login extends React.Component<CounterProps, {}> {
  public render() {
    return (
      <div>
        <p>{this.props.count}</p>

        <button onClick={
          // tslint:disable-next-line:jsx-no-lambda
          () => {
            this.props.increment();
          }
        }>Click</button>
      </div>
    )
  }

  public onClick1 = () => {
    this.props.increment();
  }
}

export default connect(
  (state: IApplicationState) => state.counter,
  CounterStore.actionCreators
)(Login);