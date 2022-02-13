import { FC } from 'react';

interface InputProps {
  label: string;
  type: 'text' | 'password';
}

const Input: FC<InputProps> = ({ label, type }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        className="border focus:border-purple-500 h-10 focus:outline-none focus:ring focus:ring-violet-300 px-3 rounded-sm hover:ring-violet-300 hover:ring"
      />
    </div>
  );
};

export default Input;
