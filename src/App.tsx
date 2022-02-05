import { useState, useEffect, Dispatch } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import {
  Home,
  Registration,
  ForgotPassword,
  Login,
  ResetPassword,
} from './pages';
import { AuthActionsType } from './reduxStore/reduxTypes/AuthTypes';
import axiosInstance from './utils/AxiosInterceptor';

const App = () => {
  const [isMounted, setIsMounted] = useState(true);
  const dispatch = useDispatch<Dispatch<AuthActionsType>>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchUser = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.get('/api/auth/refresh-token');
      const { data } = await axiosInstance.get('/api/user/me');
      if (isMounted) {
        if (data.user) {
          dispatch({
            type: 'SET_AUTHENTICATED',
            payload: data.user,
          });
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Container>
        <div
          style={{ height: '100vh' }}
          className="d-flex w-100 align-items-center justify-content-center"
        >
          <Spinner animation="border" />
        </div>
      </Container>
    );
  }
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
