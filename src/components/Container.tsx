import React, { FC } from 'react';

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
