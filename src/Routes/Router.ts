import RouterData from './RouterData';
import systemRouter from './System';
import settingRouter from './Setting';

const routerData: RouterData[] = [
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
