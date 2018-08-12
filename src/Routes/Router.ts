export interface IRouterData {
  path: string,
  key: string,
  name: string,
  component: any,
  exact: boolean,
  children: IRouterData[]
}

const routerData: IRouterData[] = [
  {
    path: '/dashboard/analysis',
    key: 'Dashboard.Analysis',
    name: 'Dashboard1',
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis1',
        key: 'Dashboard.Analysis',
        name: 'Analysis1',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis2',
        key: 'Dashboard.Analysis',
        name: 'Analysis2',
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
    component: import('../Views/Dashboard/Analysis'),
    exact: false,
    children: [
      {
        path: '/dashboard/analysis4',
        key: 'Dashboard.Analysis',
        name: 'Analysis4',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: []
      },
      {
        path: '/dashboard/analysis5',
        key: 'Dashboard.Analysis',
        name: 'Analysis5',
        component: import('../Views/Dashboard/Analysis'),
        exact: false,
        children: [
          {
            path: '/dashboard/analysis6',
            key: 'Dashboard.Analysis',
            name: 'Analysis6',
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
