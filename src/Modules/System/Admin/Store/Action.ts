import { AdminList, SearchData, AdminDetail } from "./State";
import { AppThunkAction } from "src/Store";
import axios from "src/Utils/Http";
import { Paged } from "src/Utils/Paged";
import { message } from "antd";

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

export interface FetchAdminDetailAcion {
  type: 'FETCH_ADMIN_DETAIL';
  detail: AdminDetail;
}

export interface ToggleVisibleAction {
  type: 'TOGGLE_VISIBLE';
  visible: boolean;
}

export type KnownAction =
  FetchAdminListAction
  | FetchingAdminListAction
  | ChangePagedAction
  | AssignSearchDataAction
  | FetchAdminDetailAcion
  | ToggleVisibleAction;

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
  },
  fetchAdminDetail: (id: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
    axios.post('admin/detail', { id })
      .then(response => response.data as AdminDetail)
      .then(data => {
        dispatch({ type: 'FETCH_ADMIN_DETAIL', detail: data });
      });
  },
  addOrEditAdmin: (record: AdminDetail): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    record = {...getState().admin.adminDetail, ...record};

    await axios.post(`admin/${record.id ? 'edit' : 'add'}`, record)
      .then(() => {
        dispatch({ type: 'TOGGLE_VISIBLE', visible: false });

        message.success('保存成功');
      });
  },
  toggleVisible: (visible: boolean): ToggleVisibleAction => ({ type: 'TOGGLE_VISIBLE', visible })
};