import './toast.scss';

type ToastProps = {
  message: string;
  title: string;
};

const Toast = ({ message, title }: ToastProps) => {
  return (
    <div className="toast">
      <p className="toast__title">{title}</p>
      <p className="toast__message">{message}</p>
    </div>
  );
};

export default Toast;
