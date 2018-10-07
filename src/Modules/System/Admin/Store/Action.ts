import { AdminList } from "./State";
import { AppThunkAction } from "src/Store";
import axios from "src/Utils/Http";
import { Paged } from "src/Utils/Paged";

export interface FetchAdminListAction {
  type: 'FETCH_ADMIN_LIST';
  adminList: AdminList[];
}

export interface FetchingAdminListAction {
  type: 'FETCHING_ADMIN_LIST';
}

export type KnownAction = FetchAdminListAction | FetchingAdminListAction;

export const actionCreators = {
  fetchAdminList: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    if (getState().admin.list.length) {
      return;
    }

    dispatch({ type: 'FETCHING_ADMIN_LIST' });

    await axios.post('admin/list')
      .then(response => response.data as Paged<AdminList[]>)
      .then(data => {
        dispatch({ type: 'FETCH_ADMIN_LIST', adminList: data.rows });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ADMIN_LIST', adminList: [] });
      });
  }
};