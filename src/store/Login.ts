import { Reducer } from 'redux';

export interface LoginState {
  // tslint:disable-next-line:no-any
  form: any;
}

interface SubmitLoginAction { type: 'SUBMIT_LOGIN_ACTION'; }

type KnownAction = SubmitLoginAction;

export const actionCreators = {
  submit: () => <SubmitLoginAction> { type: 'SUBMIT_LOGIN_ACTION' }
};

export const reducer: Reducer<LoginState> = (state: LoginState, action: KnownAction) => {
  switch (action.type) {
    case 'SUBMIT_LOGIN_ACTION':
      return state;
    default:
  }

  return state || { form: {} };
};
