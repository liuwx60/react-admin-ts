import RouterData from '../RouterData';

const settingRouter: RouterData[] = [
  {
    path: '/setting',
    key: 'Setting',
    name: '系统设置',
    icon: 'setting',
    isMenu: true,
    component: null,
    exact: false,
    children: [
      {
        path: '/setting/change-password',
        key: 'Change-Password',
        name: '修改密码',
        icon: 'setting',
        isMenu: true,
        component: import('../../Views/System/Admin/List'),
        exact: false,
        children: []
      }
    ]
  }
];

export default settingRouter;