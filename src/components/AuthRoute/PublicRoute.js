import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function PublicRoute({ children }) {
  const { user } = useSelector((state) => state?.users);

  return !user? children : <Navigate to="/" />;
}
