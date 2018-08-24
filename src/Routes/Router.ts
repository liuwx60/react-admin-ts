import IRouterData from './IRouterData';
import systemRouter from './System';
import settingRouter from './Setting';

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
  ...systemRouter,
  ...settingRouter
];

export default routerData;
