import { useAuth } from "../contexts/AuthContex";
import { Navigate } from "react-router-dom";

// const PrivateOutlet = () => {
//   const { currentUser } = useAuth();

//   return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
// };
// export default PrivateOutlet;

// jodi signup or log in thake tahole sob element ei jete parbe
// otherwise navigate korbe login page e
// this is my technique

const PrivateOutlet = ({ Element }) => {
  const { currentUser } = useAuth();

  return currentUser ? Element : <Navigate to="/login" replace />;
};
export default PrivateOutlet;
