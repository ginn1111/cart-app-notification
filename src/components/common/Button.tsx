import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cx from 'clsx';
import classes from './Button.module.scss';

type ButtonProps = {
  variant?: 'primary' | 'outline';
  children?: ReactNode;
  loading?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  loading = false,
  variant = 'primary',
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cx(classes.button, classes[variant], className)}
      disabled={disabled}
      {...rest}
    >
      {loading && <p>Loading...</p>}
      {!loading && children}
    </button>
  );
};

export default Button;
