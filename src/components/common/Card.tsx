import React from 'react';
import classes from './Card.module.scss';

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
