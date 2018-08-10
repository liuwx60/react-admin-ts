import { Reducer } from 'redux';

// tslint:disable-next-line:no-empty-interface
export interface ILoginState {}

interface ISubmitLoginAction { type: 'SUBMIT_LOGIN_ACTION'; }

type KnownAction = ISubmitLoginAction;

export const actionCreators = {
  submit: (values: any): ISubmitLoginAction => {
    return { type: 'SUBMIT_LOGIN_ACTION' };
   }
};

export const reducer: Reducer<ILoginState> = (state: ILoginState, action: KnownAction) => {
  switch (action.type) {
    case 'SUBMIT_LOGIN_ACTION':
      return state;
    default:
  }

  return state || {};
};