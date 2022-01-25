import { FC } from 'react';
import { Alert } from 'react-bootstrap';

export type AlertVariant = 'danger' | 'success';

interface MyAlertProps {
  variant: AlertVariant;
  message: string;
  isShow: boolean;
  onClose: () => void;
}

const MyAlert: FC<MyAlertProps> = ({ variant, message, onClose, isShow }) => {
  return (
    <>
      {isShow && (
        <Alert variant={variant} onClose={onClose} dismissible>
          {message}
        </Alert>
      )}
    </>
  );
};

export default MyAlert;
