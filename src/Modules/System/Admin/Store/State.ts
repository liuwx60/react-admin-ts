import { BaseSearch } from "src/Utils/BaseSearch";
import { Paged } from "src/Utils/Paged";

export interface AdminList {
  id: string;
  username: string;
  nickName: string;
  email: string;
  lastLoginTime: Date;
}

export interface SearchData extends BaseSearch {
  username: string | null;
  nickName: string | null;
}

export interface AdminDetail {
  id: number;
  username: string;
  nickName: string;
  email: string;
}

export interface AdminState {
  listData: Paged<AdminList[]>;
  isFetching: boolean;
  searchData: SearchData;
  adminDetail: AdminDetail;
  saving: boolean;
  visible: boolean;
}

export const initSearchData: SearchData = {
  username: null,
  nickName: null,
  page: 1,
  pageSize: 20
};

export const initState: AdminState = {
  listData: { rows: [], total: 0 },
  isFetching: false,
  searchData: initSearchData,
  adminDetail: {} as AdminDetail,
  saving: false,
  visible: false
};