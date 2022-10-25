import React from 'react';

const Square = ({
  black,
  children,
}: {
  black: boolean;
  children: React.ReactNode;
}) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default Square;
