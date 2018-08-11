interface IRouterData {
  path: string,
  key: string,
  component: any,
  exact: boolean
}

const routerData: IRouterData[] = [
  {
    path: '/dashboard/analysis',
    key: 'Dashboard.Analysis',
    component: import('../Views/Dashboard/Analysis'),
    exact: false
  }
];

export default routerData;
