import IRouterData from './IRouterData';
import systemRouter from './System';

const routerData: IRouterData[] = [
  {
    path: '/dashboard',
    key: 'Dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    isMenu: true,
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: []
  },
  ...systemRouter
];

export default routerData;
