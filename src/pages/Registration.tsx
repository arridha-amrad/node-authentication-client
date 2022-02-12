import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MyAlert, { AlertVariant } from '../boostrapComponents/MyAlert';
import RegistrationForm from '../components/RegistrationForm';
import { RootState } from '../reduxStore';

export interface MessageProps {
  body: string;
  type: AlertVariant;
}

const Register = () => {
  const [message, setMessage] = useState<MessageProps>({
    body: '',
    type: 'success',
  });
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  const { isLoadingAuth } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <div className="mt-5">
        {!!message.body && (
          <MyAlert
            message={message.body}
            variant={message.type}
            isShow={isAlertOpen}
            onClose={() => setIsAlertOpen(false)}
          />
        )}
        <RegistrationForm
          reEnableAlert={() => setIsAlertOpen(true)}
          isLoading={isLoadingAuth}
          setMessage={setMessage}
        />
      </div>
    </Container>
  );
};

export default Register;
