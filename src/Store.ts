import * as Admin from './Modules/System/Admin/Store';

export interface ApplicationState {
  admin: Admin.AdminState;
}

export const reducers = {
  admin: Admin.reducer
};

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;