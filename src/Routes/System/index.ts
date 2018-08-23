import IRouterData from '../IRouterData';
import adminRouter from './Admin';
import roleRouter from './Role';

const systemRouter: IRouterData[] = [
  {
    path: '/system',
    key: 'System',
    name: '系统管理',
    icon: 'setting',
    isMenu: true,
    component: null,
    exact: false,
    children: [
      ...adminRouter,
      ...roleRouter
    ]
  }
];

export default systemRouter;