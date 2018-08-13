import * as Counter from './Counter';
import * as Login from './Account/Login';

export interface IApplicationState {
  counter: Counter.ICounterState;
  login: Login.ILoginState
}

export const reducers = {
  counter: Counter.reducer,
  login: Login.reducer
};

// tslint:disable-next-line:interface-name
export interface AppThunkAction<TAction> {
  // tslint:disable-next-line:callable-types
  (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}