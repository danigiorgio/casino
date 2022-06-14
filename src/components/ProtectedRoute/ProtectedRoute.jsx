import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '@/utils/storage';

const ProtectedRoute = () => {
  const user = getUser();

  if (user) return <Outlet />;

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
