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
    key: 'Dashboard.Analysis123',
    name: 'Dashboard1',
    icon: 'ant-design',
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis1',
        key: 'Dashboard.Analysis1',
        name: 'Analysis1',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis2',
        key: 'Dashboard.Analysis2',
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
    key: 'Dashboard.Analysis456',
    name: 'Dashboard2',
    icon: 'ant-design',
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis4',
        key: 'Dashboard.Analysis4',
        name: 'Analysis4',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis5',
        key: 'Dashboard.Analysis5',
        name: 'Analysis5',
        icon: '',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: [
          {
            path: '/dashboard/analysis6',
            key: 'Dashboard.Analysis6',
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
