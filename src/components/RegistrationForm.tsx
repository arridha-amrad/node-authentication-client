import { Dispatch, FC, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MyButton from '../boostrapComponents/MyButton';
import TextInput from '../boostrapComponents/TextInput';
import { MessageProps } from '../pages/Registration';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';
import useForm from '../utils/UseForm';

interface RegistrationFormProps {
  reEnableAlert: () => void;
  setMessage: Dispatch<SetStateAction<MessageProps>>;
  isLoading: boolean;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  setMessage,
  isLoading,
  reEnableAlert,
}) => {
  const dispatch = useDispatch<Dispatch<AuthActionsType>>();

  const register = async () => {
    try {
      reEnableAlert();
      dispatch({ type: 'LOADING_AUTH' });
      const { data } = await axiosInstance.post('/api/auth/register', {
        ...states,
      });
      setMessage({
        type: 'success',
        body: data.message,
      });
    } catch (err: any) {
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
      email: '',
      username: '',
      password: '',
    },
    register
  );

  const { email, password, username } = states;

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        value={email}
        onChange={onChange}
        label="Email"
        name="email"
        type="text"
      />
      <TextInput
        value={username}
        onChange={onChange}
        label="Username"
        name="username"
        type="text"
      />
      <TextInput
        value={password}
        onChange={onChange}
        label="Password"
        name="password"
        type="password"
      />
      <MyButton
        isLoading={isLoading}
        label="Register"
        type="submit"
        variant="primary"
      />
    </Form>
  );
};

export default RegistrationForm;
