import { Reducer } from "redux";
import { AdminList, AdminState, initState } from "./State";
import { KnownAction, FetchAdminListAction, actionCreators } from "./Action";

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