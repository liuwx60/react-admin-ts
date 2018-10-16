import { RoleState, initRoleState, RoleDetail } from "./State";
import { actionCreators, KnownAction, FetchRoleListAction, ChangePagedAction, FetchRoleDetailAction, ToggleVisibleAction } from "./Action";
import { Reducer } from "redux";

export { RoleState, actionCreators };

export const reducer: Reducer<RoleState, KnownAction> =
  (state: RoleState, action: KnownAction) =>
    action.type in mutations
    ? mutations[action.type](state, action)
    : (state || initRoleState);

type IMutations = {
  [index in KnownAction["type"]]: (state: RoleState, action: KnownAction) => RoleState;
};

const mutations: IMutations = {
  ['FETCH_ROLE_LIST'] (state: RoleState, action: FetchRoleListAction) {
    return {
      ...state,
      pagedList: action.data
    };
  },
  ['CHANGE_PAGED'] (state: RoleState, action: ChangePagedAction) {
    return {
      ...state,
      searchData: {
        ...state.searchData,
        page: action.page,
        pageSize: action.pageSize
      }
    };
  },
  ['FETCH_ROLE_DETAIL'] (state: RoleState, action: FetchRoleDetailAction) {
    return {
      ...state,
      roleDetail: action.detail
    };
  },
  ['TOGGLE_VISIBLE'] (state: RoleState, action: ToggleVisibleAction) {
    return {
      ...state,
      roleDetail: {} as RoleDetail,
      visible: action.visible
    };
  }
};