import { ReactNode, forwardRef, ForwardedRef } from 'react';
import './badge.scss';

type BadgeProps = {
  children?: ReactNode;
};

const Badge = ({ children }: BadgeProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="badge">
      {children}
    </div>
  );
};

export default forwardRef(Badge);
