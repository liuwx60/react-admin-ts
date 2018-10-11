import { Paged } from "src/Utils/Paged";
import { RoleList, RoleDetail } from "./State";
import { AppThunkAction } from "src/Store";
import axios from "src/Utils/Http";
import { message } from "antd";

export interface FetchRoleListAction {
  type: 'FETCH_ROLE_LIST';
  data: Paged<RoleList[]>;
}

export interface ChangePagedAction {
  type: 'CHANGE_PAGED';
  page: number;
  pageSize: number;
}

export interface FetchRoleDetailAction {
  type: 'FETCH_ROLE_DETAIL';
  detail: RoleDetail;
}

export interface ToggleVisibleAction {
  type: 'TOGGLE_VISIBLE';
  visible: boolean;
}

export type KnownAction =
  FetchRoleListAction
  | ChangePagedAction
  | FetchRoleDetailAction
  | ToggleVisibleAction;

export const actionCreators = {
  fetchRoleList: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    axios.post('role/list', getState().role.searchData)
      .then(response => response.data as Paged<RoleList[]>)
      .then(data => {
        dispatch({ type: 'FETCH_ROLE_LIST', data });
      });
  },
  changePage: (page: number, pageSize: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
    dispatch({ type: 'CHANGE_PAGED', page, pageSize });
    actionCreators.fetchRoleList()(dispatch, getState);
  },
  fetchRoleDetail: (id: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
    axios.post('role/detail', { id })
      .then(response => response.data as RoleDetail)
      .then(data => {
        dispatch({ type: 'FETCH_ROLE_DETAIL', detail: data });
      });
  },
  toggleVisible: (visible: boolean): ToggleVisibleAction => ({ type: 'TOGGLE_VISIBLE', visible }),
  addOrEditRole: (record: RoleDetail): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    record = {...getState().role.roleDetail, ...record};

    await axios.post(`role/${record.id ? 'edit' : 'add'}`, record)
      .then(() => {
        dispatch({ type: 'TOGGLE_VISIBLE', visible: false });
        dispatch({ type: 'FETCH_ROLE_DETAIL', detail: {} as RoleDetail });

        message.success('保存成功');
      });
  }
};