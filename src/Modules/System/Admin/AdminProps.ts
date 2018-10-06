import { actionCreators, AdminState } from "./Store";
import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";

type AdminProps =
  AdminState
  & typeof actionCreators
  & RouteComponentProps<{}>
  & FormComponentProps;

export default AdminProps;