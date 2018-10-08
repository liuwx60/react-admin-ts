import { Reducer } from "redux";
import { AdminList, AdminState, initState } from "./State";
import {
  KnownAction,
  FetchAdminListAction,
  actionCreators,
  ChangePagedAction,
  AssignSearchDataAction,
  FetchAdminDetailAcion,
  ToggleVisibleAction
} from "./Action";

export { AdminState, AdminList, actionCreators };

export const reducer: Reducer<AdminState, KnownAction> =
  (state: AdminState, action: KnownAction) =>
    action.type in mutations
    ? mutations[action.type](state, action)
    : (state || initState);

type IMutations = {
  [index in KnownAction["type"]]: (state: AdminState, action: KnownAction) => AdminState;
};

const mutations: IMutations = {
  ['FETCH_ADMIN_LIST'] (state: AdminState, action: FetchAdminListAction) {
    return {
      ...state,
      listData: action.listData,
      isFetching: false
    } as AdminState;
  },
  ['FETCHING_ADMIN_LIST'] (state: AdminState) {
    return {
      ...state,
      isFetching: true
    } as AdminState;
  },
  ['CHANGE_PAGED'] (state: AdminState, action: ChangePagedAction) {
    return {
      ...state,
      searchData: {
        ...state.searchData,
        page: action.page,
        pageSize: action.pageSize
      }
    };
  },
  ['ASSIGN_SEARCH_DATA'] (state: AdminState, action: AssignSearchDataAction) {
    return {
      ...state,
      searchData: {
        ...action.searchData,
        page: 1,
        pageSize: state.searchData.pageSize
      }
    };
  },
  ['FETCH_ADMIN_DETAIL'] (state: AdminState, action: FetchAdminDetailAcion) {
    return {
      ...state,
      adminDetail: action.detail
    };
  },
  ['TOGGLE_VISIBLE'] (state: AdminState, action: ToggleVisibleAction) {
    return {
      ...state,
      visible: action.visible
    };
  }
};