import { BaseSearch } from "src/Utils/BaseSearch";
import { Paged } from "src/Utils/Paged";

export interface AdminList {
  id: number;
  username: string;
  nickName: string;
  email: string;
  lastLoginTime: Date;
}

export interface SearchData extends BaseSearch {
  username: string | null;
  nickName: string | null;
}

export interface AdminState {
  listData: Paged<AdminList[]>;
  isFetching: boolean;
  searchData: SearchData;
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
  searchData: initSearchData
};