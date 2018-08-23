import IRouterData from '../IRouterData';

const roleRouter: IRouterData[] = [
  {
    path: '/system/role/list',
    key: 'System.Role.List',
    name: '角色',
    icon: 'user',
    isMenu: true,
    component: import('../../Views/System/Role/List'),
    exact: false,
    children: []
  }
];

export default roleRouter;