import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MyAlert, { AlertVariant } from '../boostrapComponents/MyAlert';
import EmailVerificationForm from '../components/EmailVerificationForm';
import RegistrationForm from '../components/RegistrationForm';
import { RootState } from '../reduxStore';

export interface MessageProps {
  body: string;
  type: AlertVariant;
}

const Register = () => {
  const [step, setStep] = useState(0);
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
        {step === 0 ? (
          <RegistrationForm
            reEnableAlert={() => setIsAlertOpen(true)}
            isLoading={isLoadingAuth}
            setMessage={setMessage}
            increaseStep={() => setStep((prev) => prev + 1)}
          />
        ) : (
          <EmailVerificationForm
            reEnableAlert={() => setIsAlertOpen(true)}
            setMessage={setMessage}
            isLoading={isLoadingAuth}
          />
        )}
      </div>
    </Container>
  );
};

export default Register;
