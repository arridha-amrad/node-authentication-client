import { FC } from 'react';

const Header: FC<{ text: string }> = ({ text }) => {
  return <h1 className="text-3xl font-semibold">{text}</h1>;
};

export default Header;
