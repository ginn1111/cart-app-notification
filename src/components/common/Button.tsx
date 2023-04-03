import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import cx from 'clsx';
import classes from './Button.module.scss';

type ButtonProps = {
  variant?: 'primary' | 'outline';
  children?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <button className={cx(classes.button, classes[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Button;
