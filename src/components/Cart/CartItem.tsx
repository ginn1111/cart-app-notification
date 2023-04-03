import classes from './CartItem.module.scss';

type CartItemProps = {
  id: string | number;
  productId: string | number;
  amount: number;
};

const CartItem = ({ id, productId, amount }: CartItemProps) => {
  return (
    <li className={classes['cart-item']}>
      <p>{productId}</p>
      <p>{amount}</p>
    </li>
  );
};

export default CartItem;
