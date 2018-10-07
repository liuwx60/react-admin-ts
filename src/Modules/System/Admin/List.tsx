import * as React from 'react';
import { Table } from 'antd';
import * as AdminStore from './Store';
import { ApplicationState } from '../../../Store';
import { connect } from 'react-redux';
import columns from './Components/Column';
import AdminProps from './Props';
import Search from './Components/Search';
import './Admin.scss';

class List extends React.Component<AdminProps, {}> {
  public componentWillMount() {
    this.props.fetchAdminList();
  }
  public render() {
    return (
      <div className="global-list">
        <div className="admin-search">
          <Search {...this.props} />
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={this.props.listData.rows}
            rowKey={record => record.id.toString()}
            loading={this.props.isFetching}
            bordered={true}
            pagination={{
              onChange: this.props.changePage,
              total: this.props.listData.total,
              pageSize: this.props.searchData.pageSize,
              current: this.props.searchData.page
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.admin,
  AdminStore.actionCreators
)(List);