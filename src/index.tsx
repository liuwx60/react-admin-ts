import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './configureStore';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { routes } from './Routes';
import { ApplicationState }  from './Store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

