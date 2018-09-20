import { AppThunkAction } from "../../../Store";
import { Reducer } from "redux";
import axios from '../../../Utils/Http';
import { Paged } from "../../../Utils/Paged";

export interface AdminList {
  id: number;
  username: string;
  nickName: string;
  email: string;
  lastLoginTime: Date;
}

export interface AdminState {
  list: AdminList[];
  isFetching: boolean;
}

const initState: AdminState = {
  list: [],
  isFetching: false
};

interface FetchAdminListAction {
  type: 'FETCH_ADMIN_LIST';
  adminList: AdminList[];
}

interface FetchingAdminListAction {
  type: 'FETCHING_ADMIN_LIST';
}

type KnownAction = FetchAdminListAction | FetchingAdminListAction;

export const actionCreators = {
  fetchAdminList: ():AppThunkAction<KnownAction> => async (dispatch, getState) => {
    if (getState().admin.list.length) {
      return;
    }

    dispatch({ type: 'FETCHING_ADMIN_LIST' });

    await axios.post('admin/list')
      .then(response => response.data as Paged<AdminList[]>)
      .then(data => {
        dispatch({ type: 'FETCH_ADMIN_LIST', adminList: data.rows });
      });
  }
};

export const reducer: Reducer<AdminState, KnownAction> =
  (state: AdminState, action: KnownAction) =>
    action.type in mutations
    ? mutations[action.type](state, action)
    : (state || initState);

type IMutations = {
  [index in KnownAction["type"]]: (state: AdminState, action: KnownAction) => AdminState;
};

const mutations: IMutations = {
  ['FETCH_ADMIN_LIST'] (state: AdminState, action: KnownAction) {
    return {
      ...state,
      list: (action as FetchAdminListAction).adminList,
      isFetching: false
    } as AdminState;
  },
  ['FETCHING_ADMIN_LIST'] (state: AdminState) {
    return {
      ...state,
      isFetching: true
    } as AdminState;
  }
};