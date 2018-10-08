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

interface AdminViewState {
  visibleAdd: boolean;
  visibleEdit: boolean;
}

class List extends React.Component<AdminProps, AdminViewState> {
  public componentWillMount() {
    this.setState({
      visibleAdd: false,
      visibleEdit: false
    });

    this.props.fetchAdminList();
  }
  public render() {
    return (
      <div className="global-list">
        <div className="admin-search">
          <Search {...this.props} />
        </div>
        <div className="table-button-container">
          <Button type="primary" onClick={() => this.setState({ visibleAdd: true })}>添加</Button>
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
        <FormModal
          {...this.props}
          formType="add"
          onCloseForm={this.handleCloseAddForm}
          visible={this.state.visibleAdd}
        />
      </div>
    );
  }

  private handleCloseAddForm = () => {
    this.setState({ visibleAdd: false });
  }
}

export default connect(
  (state: ApplicationState) => state.admin,
  AdminStore.actionCreators
)(List);