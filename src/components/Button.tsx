import { FC } from 'react';

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'cancel';
  isFullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ label, type, isFullWidth = false }) => {
  return (
    <button
      className={`${
        type === 'primary'
          ? 'bg-purple-500 focus:ring-purple-300'
          : type === 'secondary'
          ? 'bg-green-500 focus:ring-green-300'
          : 'bg-gray-500 focus:ring-gray-300'
      } p-2 block h-10 text-white rounded-sm focus:ring focus:outline-none hover:shadow-lg duration-75 ${
        isFullWidth && 'w-full'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
