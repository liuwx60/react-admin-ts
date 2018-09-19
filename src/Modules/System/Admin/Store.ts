import { AppThunkAction } from "../../../Store";
import { AxiosResponse } from "axios";
import { Reducer } from "redux";
import axios from '../../../Utils/Http';

export interface AdminList {
  id: number;
  username: string;
}

export interface AdminState {
  list: AdminList[]
}

interface FetchAdminListAction {
  type: 'FETCH_ADMIN_LIST';
  adminList: AdminList[];
}

type KnownAction = FetchAdminListAction;

export const actionCreators = {
  fetchAdminList: ():AppThunkAction<KnownAction> => async (dispatch, getState) => {
    if (getState().admin.list.length) {
      return;
    }
    await axios.post('admin/list')
      .then(response => response as AxiosResponse<AdminList[]>)
      .then(data => {
        dispatch({ type: 'FETCH_ADMIN_LIST', adminList: data.data });
      });
  }
};

const unloadedState: AdminState = { list: [] };

export const reducer: Reducer<AdminState, KnownAction> = (state: AdminState, action: KnownAction) => {
  switch (action.type) {
    case 'FETCH_ADMIN_LIST':
      return { list: action.adminList };
    default:
  }

  return state || unloadedState;
};