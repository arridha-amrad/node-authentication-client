import { Dispatch, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import MyAlert from '../boostrapComponents/MyAlert';
import MyButton from '../boostrapComponents/MyButton';
import TextInput from '../boostrapComponents/TextInput';
import { RootState } from '../reduxStore';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';
import useForm from '../utils/UseForm';
import { MessageProps } from './Registration';

const ResetPassword = () => {
  const { isLoadingAuth } = useSelector((state: RootState) => state.auth);

  const [message, setMessage] = useState<MessageProps>({
    body: '',
    type: 'danger',
  });

  const dispatch = useDispatch<Dispatch<AuthActionsType>>();

  const [isOpen, setIsOpen] = useState(true);

  const param = useParams();

  const resetPassword = async () => {
    try {
      dispatch({ type: 'LOADING_AUTH' });
      const { data } = await axiosInstance.post(
        `/api/auth/reset-password/${param.token}`,
        { ...states }
      );
      setMessage({
        type: 'success',
        body: data.message,
      });
      setStates({
        ...states,
        password: '',
      });
    } catch (err: any) {
      console.log(err);
      setMessage({
        type: 'danger',
        body: err.response.data.message,
      });
    } finally {
      dispatch({ type: 'STOP_LOADING_AUTH' });
    }
  };

  const { onChange, onSubmit, states, setStates } = useForm(
    {
      password: '',
    },
    resetPassword
  );

  return (
    <Container>
      <div className="mt-5">
        {!!message.body && (
          <MyAlert
            isShow={isOpen}
            message={message.body}
            onClose={() => setIsOpen(false)}
            variant={message.type}
          />
        )}
        <Form onSubmit={onSubmit}>
          <TextInput
            value={states.password}
            label="New Password"
            name="password"
            placeholder="New Password"
            type="password"
            formText="Enter your new password"
            onChange={onChange}
          />
          <MyButton
            isLoading={isLoadingAuth}
            label="Submit"
            type="submit"
            variant="primary"
          />
        </Form>
        <Link to="/login">login</Link>
      </div>
    </Container>
  );
};

export default ResetPassword;
