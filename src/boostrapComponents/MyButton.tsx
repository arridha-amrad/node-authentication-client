import { FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';

type ButtonVariant = 'primary' | 'secondary' | 'success';

interface MyButtonProps {
  type: 'button' | 'submit';
  label: string;
  variant: ButtonVariant;
  onClick?: () => void;
  isLoading: boolean;
}

const MyButton: FC<MyButtonProps> = ({
  type,
  label,
  variant,
  onClick,
  isLoading,
}) => {
  return (
    <Button
      disabled={isLoading}
      onClick={onClick}
      variant={variant}
      type={type}
    >
      {isLoading ? <Spinner animation="border" /> : label}
    </Button>
  );
};

export default MyButton;
