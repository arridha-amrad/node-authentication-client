import { Dispatch, FC, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyButton from '../boostrapComponents/MyButton';
import TextInput from '../boostrapComponents/TextInput';
import { MessageProps } from '../pages/Registration';
import { AuthActionsType } from '../reduxStore/reduxTypes/AuthTypes';
import axiosInstance from '../utils/AxiosInterceptor';
import useForm from '../utils/UseForm';

interface EmailVerificationProps {
  reEnableAlert: () => void;
  isLoading: boolean;
  setMessage: Dispatch<SetStateAction<MessageProps>>;
}

const EmailVerificationForm: FC<EmailVerificationProps> = ({
  isLoading,
  setMessage,
  reEnableAlert,
}) => {
  const dispatch = useDispatch<Dispatch<AuthActionsType>>();

  const navigate = useNavigate();

  const verify = async () => {
    try {
      reEnableAlert();
      dispatch({ type: 'LOADING_AUTH' });
      const { data } = await axiosInstance.put('/api/auth/verify-email', {
        verificationCode: states.verificationCode,
      });
      dispatch({
        type: 'SET_AUTHENTICATED',
        payload: data.user,
      });
      navigate('/');
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

  const { onChange, onSubmit, states } = useForm(
    {
      verificationCode: '',
    },
    verify
  );

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        value={states.verificationCode}
        label="Verification Code"
        name="verificationCode"
        placeholder="Verification Code"
        type="text"
        formText="Enter verification code we sent to your email"
        onChange={onChange}
      />
      <MyButton
        isLoading={isLoading}
        label="Submit"
        type="submit"
        variant="primary"
      />
    </Form>
  );
};

export default EmailVerificationForm;
