import RouterData from '../RouterData';

const adminRouter: RouterData[] = [
  {
    path: '/system/admin/list',
    key: 'System.Admin.List',
    name: '管理员',
    icon: 'user',
    isMenu: true,
    component: import('../../Views/System/Admin/List'),
    exact: false,
    children: []
  }
];

export default adminRouter;