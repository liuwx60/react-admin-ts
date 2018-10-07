import { AdminList, SearchData } from "./State";
import { AppThunkAction } from "src/Store";
import axios from "src/Utils/Http";
import { Paged } from "src/Utils/Paged";

export interface FetchAdminListAction {
  type: 'FETCH_ADMIN_LIST';
  listData: Paged<AdminList[]>;
}

export interface FetchingAdminListAction {
  type: 'FETCHING_ADMIN_LIST';
}

export interface ChangePagedAction {
  type: 'CHANGE_PAGED';
  page: number;
  pageSize: number;
}

export interface AssignSearchDataAction {
  type: 'ASSIGN_SEARCH_DATA';
  searchData: SearchData;
}

export type KnownAction =
  FetchAdminListAction
  | FetchingAdminListAction
  | ChangePagedAction
  | AssignSearchDataAction;

export const actionCreators = {
  fetchAdminList: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    dispatch({ type: 'FETCHING_ADMIN_LIST' });

    axios.post('admin/list', getState().admin.searchData)
      .then(response => response.data as Paged<AdminList[]>)
      .then(data => {
        dispatch({ type: 'FETCH_ADMIN_LIST', listData: data });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ADMIN_LIST', listData: { rows: [], total: 0 } });
      });
  },
  changePage: (page: number, pageSize: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
    dispatch({ type: 'CHANGE_PAGED', page, pageSize });
    actionCreators.fetchAdminList()(dispatch, getState);
  },
  assignSearchData: (searchData: SearchData): AppThunkAction<KnownAction> => (dispatch, getState) => {
    dispatch({ type: 'ASSIGN_SEARCH_DATA', searchData });
    actionCreators.fetchAdminList()(dispatch, getState);
  }
};