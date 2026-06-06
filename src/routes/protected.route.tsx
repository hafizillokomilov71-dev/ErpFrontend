import { getItem } from "../utils/localstorage";
import { Navigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = getItem("token");
  if (!token) {
    return children;
  }
  return <Navigate to={"/"} />;
};
export default ProtectedRoute;
