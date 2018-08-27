import { Reducer } from 'redux';

// tslint:disable-next-line:no-empty-interface
export interface LoginState {}

interface SubmitLoginAction { type: 'SUBMIT_LOGIN_ACTION'; }

type KnownAction = SubmitLoginAction;

export const actionCreators = {
  submit: (values: any): SubmitLoginAction => {
    return { type: 'SUBMIT_LOGIN_ACTION' };
   }
};

export const reducer: Reducer<LoginState> = (state: LoginState, action: KnownAction) => {
  switch (action.type) {
    case 'SUBMIT_LOGIN_ACTION':
      return state;
    default:
  }

  return state || {};
};