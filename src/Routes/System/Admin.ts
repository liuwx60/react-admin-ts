import IRouterData from '../IRouterData';

const adminRouter: IRouterData[] = [
  {
    path: '/system/admin/list',
    key: 'System.Admin.List',
    name: '管理员',
    icon: 'user',
    isMenu: true,
    component: import('../../Views/System/Admin/List'),
    exact: false,
    children: [
      {
        path: '/system/admin/add',
        key: 'System.Admin.Add',
        name: '添加管理员',
        icon: 'user',
        isMenu: true,
        component: import('../../Views/System/Admin/List'),
        exact: false,
        children: []
      }
    ]
  }
];

export default adminRouter;