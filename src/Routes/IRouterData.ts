export default interface IRouterData {
  path: string,
  key: string,
  name: string,
  icon: string,
  isMenu: boolean,
  component: any,
  exact: boolean,
  children: IRouterData[]
}