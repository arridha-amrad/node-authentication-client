import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../reduxStore';

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoadingAuth } = useSelector(
    (state: RootState) => state.auth
  );
  return !isLoadingAuth && isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
