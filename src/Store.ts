import * as Admin from './Modules/System/Admin/Store';
import * as Role from './Modules/System/Role/Store';

export interface ApplicationState {
  admin: Admin.AdminState;
  role: Role.RoleState;
}

export const reducers = {
  admin: Admin.reducer,
  role: Role.reducer
};

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;