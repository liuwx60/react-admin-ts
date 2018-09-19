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

export const reducer: Reducer<AdminState, KnownAction> =
  (state: AdminState, action: KnownAction) =>
    action.type in mutations
    ? mutations[action.type](state, action)
    : (state || unloadedState);

interface IMutations {
  [index: string]: (state: AdminState, action: KnownAction) => AdminState;
}

const mutations: IMutations = {
  ['FETCH_ADMIN_LIST'] (state: AdminState, action: KnownAction) {
    return { ...state, list: action.adminList } as AdminState;
  }
};