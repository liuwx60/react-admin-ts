import { Paged } from "src/Utils/Paged";
import { BaseSearch } from "src/Utils/BaseSearch";

export interface RoleList {
  id: string;
  name: string;
  createAt: Date;
}

export interface SearchData extends BaseSearch {
  name: string | null;
}

export interface RoleDetail {
  id: string;
  name: string;
}

export interface RoleState {
  pagedList: Paged<RoleList[]>;
  searchData: SearchData;
  isFetching: boolean;
  roleDetail: RoleDetail;
  visible: boolean;
  saving: boolean;
}

export const initSearchData: SearchData = {
  name: null,
  page: 1,
  pageSize: 20
};

export const initRoleState: RoleState = {
  pagedList: { total: 0, rows: [] },
  searchData: initSearchData,
  isFetching: false,
  roleDetail: {} as RoleDetail,
  visible: false,
  saving: false
};