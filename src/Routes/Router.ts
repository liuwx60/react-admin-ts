export interface IRouterData {
  path: string,
  key: string,
  name: string,
  icon: string,
  component: any,
  exact: boolean,
  children: IRouterData[]
}

const routerData: IRouterData[] = [
  {
    path: '/dashboard/analysis',
    key: 'Dashboard.Analysis',
    name: 'Dashboard1',
    icon: 'ant-design',
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis1',
        key: 'Dashboard.Analysis',
        name: 'Analysis1',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis2',
        key: 'Dashboard.Analysis',
        name: 'Analysis2',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      }
    ]
  },
  {
    path: '/dashboard/analysis3',
    key: 'Dashboard.Analysis',
    name: 'Dashboard2',
    icon: 'ant-design',
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis4',
        key: 'Dashboard.Analysis',
        name: 'Analysis4',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis5',
        key: 'Dashboard.Analysis',
        name: 'Analysis5',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: [
          {
            path: '/dashboard/analysis6',
            key: 'Dashboard.Analysis',
            name: 'Analysis6',
            icon: '',
            component: import('../Views/Dashboard/Analysis'),
            exact: false,
            children: []
          }
        ]
      }
    ]
  }
];

export default routerData;
