import React from 'react';
import './card.scss';

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
