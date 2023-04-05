import { ReactNode } from 'react';
import classes from './Badge.module.scss';

type BadgeProps = {
  children?: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return <div className={classes.badge}>{children}</div>;
};

export default Badge;
