import { Dispatch, useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import MyAlert from '../boostrapComponents/MyAlert';
import MyButton from '../boostrapComponents/MyButton';
import TextInput from '../boostrapComponents/TextInput';
import { RootState } from '../reduxStore';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';
import useForm from '../utils/UseForm';
import { MessageProps } from './Registration';

const Login = () => {
  const [message, setMessage] = useState<MessageProps>({
    body: '',
    type: 'danger',
  });

  const [isOpen, setIsOpen] = useState(true);

  const { isLoadingAuth, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<AuthActionsType>>();

  const login = async () => {
    try {
      setIsOpen(true);
      dispatch({ type: 'LOADING_AUTH' });
      const { data } = await axiosInstance.post('/api/auth/login', {
        ...states,
      });
      dispatch({ type: 'SET_AUTHENTICATED', payload: data.user });
      navigate('/');
    } catch (err: any) {
      console.log(err.response.data);
      setMessage({
        type: 'danger',
        body: err.response.data.message,
      });
    } finally {
      dispatch({ type: 'STOP_LOADING_AUTH' });
    }
  };

  const { onChange, onSubmit, states } = useForm(
    {
      identity: '',
      password: '',
    },
    login
  );

  useEffect(() => {
    if (!isLoadingAuth && isAuthenticated) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <div className="mt-5">
        {!!message.body && (
          <MyAlert
            isShow={isOpen}
            message={message.body}
            onClose={() => setIsOpen(false)}
            variant="danger"
          />
        )}
        <Form onSubmit={onSubmit} className="mb-3">
          <TextInput
            value={states.identity}
            name="identity"
            onChange={onChange}
            label="Email or Username"
            placeholder="Email or Username"
            type="text"
          />
          <TextInput
            value={states.password}
            name="password"
            onChange={onChange}
            label="Password"
            placeholder="Password"
            type="password"
          />
          <MyButton
            isLoading={isLoadingAuth}
            label="Login"
            type="submit"
            variant="primary"
          />
        </Form>
        <Link to="/register">register</Link>
        <Link to="/forgot-password">forgot password</Link>
      </div>
    </Container>
  );
};

export default Login;
