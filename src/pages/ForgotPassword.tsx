import { Dispatch, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MyAlert from '../boostrapComponents/MyAlert';
import MyButton from '../boostrapComponents/MyButton';
import TextInput from '../boostrapComponents/TextInput';
import { RootState } from '../reduxStore';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';
import useForm from '../utils/UseForm';
import { MessageProps } from './Registration';

const ForgotPassword = () => {
  const { isLoadingAuth } = useSelector((state: RootState) => state.auth);

  const [message, setMessage] = useState<MessageProps>({
    body: '',
    type: 'danger',
  });

  const dispatch = useDispatch<Dispatch<AuthActionsType>>();

  const [isOpen, setIsOpen] = useState(true);

  const submitResetPasswordRequest = async () => {
    try {
      setIsOpen(true);
      dispatch({ type: 'LOADING_AUTH' });
      const { data } = await axiosInstance.post('/api/auth/forgot-password', {
        ...states,
      });
      setMessage({
        type: 'success',
        body: data.message,
      });
      setStates({
        ...states,
        email: '',
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
      email: '',
    },
    submitResetPasswordRequest
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
            value={states.email}
            label="Email"
            name="email"
            onChange={onChange}
            placeholder="Email"
            type="text"
            formText="We'll send you and email to reset your password"
          />
          <MyButton
            isLoading={isLoadingAuth}
            label="Submit"
            type="submit"
            variant="primary"
          />
        </Form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
