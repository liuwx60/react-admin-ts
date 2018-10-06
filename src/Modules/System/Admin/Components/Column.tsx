import { ColumnProps } from "antd/lib/table";
import moment from 'moment';
import * as React from "react";
import { AdminList } from "../Store";

const columns: Array<ColumnProps<AdminList>> = [
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '昵称',
    dataIndex: 'nickName'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '登录时间',
    dataIndex: 'lastLoginTime',
    render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>
  }
];

export default columns;