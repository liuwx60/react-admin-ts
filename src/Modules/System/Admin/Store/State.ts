export interface AdminList {
  id: number;
  username: string;
  nickName: string;
  email: string;
  lastLoginTime: Date;
}

export interface RequestData {
  username: string | null;
  nickName: string | null;
}

export interface AdminState {
  list: AdminList[];
  isFetching: boolean;
  requestData: RequestData;
}

export const initRequestData: RequestData = {
  username: null,
  nickName: null
};

export const initState: AdminState = {
  list: [],
  isFetching: false,
  requestData: initRequestData
};