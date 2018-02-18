import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';
import { Button } from 'antd';

interface CounterState {
  currentCount: number;
}

type CounterProps = 
  CounterStore.CounterState
  & typeof CounterStore.actionCreators
  & RouteComponentProps<{}>;

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { currentCount: 0 };
  }

  public render() {
    return (
      <div>
        <h1>Counter</h1>

        <p className="aa">This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.props.count}</strong></p>

        <button onClick={() => { this.props.increment(); }}>Increment</button>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <button onClick={() => { this.incrementCounter(); }}>Increment</button>

        <Button type="primary">Primary</Button>
      </div>
    );
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }
}

export default connect(
  (state: ApplicationState) => state.counter,
  CounterStore.actionCreators
)(Counter);
