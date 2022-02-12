import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyButton from '../boostrapComponents/MyButton';
import { RootState } from '../reduxStore';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';

const Logout = () => {
  const { isLoadingAuth } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<Dispatch<AuthActionsType>>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch({
        type: 'SET_UNAUTHENTICATED',
      });
      await axiosInstance.post('/api/auth/logout');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MyButton
      isLoading={isLoadingAuth}
      label="Logout"
      type="button"
      variant="secondary"
      onClick={handleLogout}
    />
  );
};

export default Logout;
