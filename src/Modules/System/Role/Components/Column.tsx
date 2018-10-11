import { RoleList } from "../Store/State";
import { ColumnProps } from "antd/lib/table";
import moment from 'moment';
import * as React from "react";

const columns: Array<ColumnProps<RoleList>> = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
    render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>
  }
];

export default columns;