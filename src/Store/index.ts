import * as Counter from './Counter';
import * as Login from './Account/Login';
import * as Admin from '../Modules/System/Admin/Store';

export interface ApplicationState {
  counter: Counter.CounterState;
  login: Login.LoginState;
  admin: Admin.AdminState;
}

export const reducers = {
  counter: Counter.reducer,
  login: Login.reducer,
  admin: Admin.reducer
};

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;