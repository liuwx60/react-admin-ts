import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import * as AdminStore from './Store';
import { ApplicationState } from '../../../Store';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

type AdminProps =
  AdminStore.AdminState
  & typeof AdminStore.actionCreators
  & RouteComponentProps<{}>;

class List extends React.Component<AdminProps, {}> {
  public componentWillMount() {
    this.props.fetchAdminList();
  }
  public render() {
    const columns: Array<ColumnProps<AdminStore.AdminList>> = [
      {
        title: '用户名',
        dataIndex: 'username'
      }
    ];

    return (
      <React.Fragment>
        <div>
          <Table columns={columns} dataSource={this.props.list} rowKey={record => record.id.toString()} />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.admin,
  AdminStore.actionCreators
)(List);