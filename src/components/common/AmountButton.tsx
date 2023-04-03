import React, {
  Dispatch,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import classes from './AmountButton.module.scss';

type AmountButtonProps = {
  initValue?: number;
};

export type AmountProps = {
  amount: number;
  setAmount: Dispatch<number>;
};

const AmountButton = (
  { initValue = 1 }: AmountButtonProps,
  ref: ForwardedRef<AmountProps>
) => {
  const [amount, setAmount] = useState(initValue);

  useImperativeHandle(ref, () => ({
    amount,
    setAmount,
  }));

  const desHandler = () =>
    setAmount((amount) => (amount > 1 ? amount - 1 : amount));
  const incHandler = () => setAmount((amount) => amount + 1);

  return (
    <div className={classes.btn}>
      <button onClick={incHandler}>
        <span>+</span>
      </button>
      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.valueAsNumber)}
      />
      <button onClick={desHandler}>
        <span>-</span>
      </button>
    </div>
  );
};

export default forwardRef(AmountButton);
