import { RoleState, actionCreators } from "./Store";
import { FormComponentProps } from "antd/lib/form";

type RoleProps =
  RoleState
  & typeof actionCreators
  & FormComponentProps;

export default RoleProps;