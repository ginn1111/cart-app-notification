import classes from './Toast.module.scss';

type ToastProps = {
  message: string;
  title: string;
};

const Toast = ({ message, title }: ToastProps) => {
  return (
    <div className={classes.toast}>
      <p className={classes.toast__title}>{title}</p>
      <p className={classes.toast__message}>{message}</p>
    </div>
  );
};

export default Toast;
