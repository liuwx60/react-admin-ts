import RouterData from '../RouterData';

const roleRouter: RouterData[] = [
  {
    path: '/system/role/list',
    key: 'System.Role.List',
    name: '角色',
    icon: 'usergroup-delete',
    isMenu: true,
    component: import('../../Modules/System/Role/List'),
    exact: false,
    children: []
  }
];

export default roleRouter;