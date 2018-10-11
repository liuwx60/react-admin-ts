import * as React from 'react';
import { Table, Button } from 'antd';
import * as AdminStore from './Store';
import { ApplicationState } from '../../../Store';
import { connect } from 'react-redux';
import columns from './Components/Column';
import AdminProps from './Props';
import Search from './Components/Search';
import './Admin.scss';
import FormModal from './Components/FormModal';

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
        <div className="table-button-container">
          <Button type="primary" onClick={() => this.props.toggleVisible(true)}>添加</Button>
        </div>
        <div>
          <Table
            columns={[
              ...columns,
              {
                title: '操作',
                render: record => (
                  <span>
                    <a href="javascript:;" onClick={() => this.handleEdit(record.id)}>编辑</a>
                  </span>
                )
              }
            ]}
            dataSource={this.props.listData.rows}
            rowKey={record => record.id}
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
        <FormModal {...this.props} />
      </div>
    );
  }

  private handleEdit = (id: string) => {
    this.props.toggleVisible(true);
    this.props.fetchAdminDetail(id);
  }
}

export default connect(
  (state: ApplicationState) => state.admin,
  AdminStore.actionCreators
)(List);