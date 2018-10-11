import * as React from 'react';
import RoleProps from './Props';
import { Table, Button } from 'antd';
import columns from './Components/Column';
import { connect } from 'react-redux';
import { ApplicationState } from 'src/Store';
import { actionCreators } from './Store';
import FormModal from './Components/FormModal';

class List extends React.Component<RoleProps, {}> {
  public componentWillMount() {
    this.props.fetchRoleList();
  }

  public render() {
    return (
      <div className="global-list">
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
            dataSource={this.props.pagedList.rows}
            rowKey={record => record.id}
            loading={this.props.isFetching}
            bordered={true}
            pagination={{
              onChange: this.props.changePage,
              total: this.props.pagedList.total,
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
    this.props.fetchRoleDetail(id);
  }
}

export default connect(
  (state: ApplicationState) => state.role,
  actionCreators
)(List);