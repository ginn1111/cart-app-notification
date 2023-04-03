import CartItem from '../components/Cart/CartItem';
import Button from '../components/common/Button';
import { useMemo } from 'react';
import { useAppSelector } from '../app/hooks';
import { PRODUCT_LIST_DUMMY } from './../pages/ProductList';

import classes from './Cart.module.scss';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const items = useAppSelector((state) => state.cart.items);

  const total = useMemo(() => {
    const findProductById = (productId: number) =>
      PRODUCT_LIST_DUMMY.find(({ id }) => id === productId) ?? { price: 0 };
    return items.reduce(
      (total, item) =>
        total + findProductById(item.productId).price * item.amount,
      0
    );
  }, [items, PRODUCT_LIST_DUMMY]);

  return (
    <section className={classes.cart}>
      <div className={classes.cart__list}>
        <ul className={classes.cart__list__header}>
          <li>Product</li>
          <li>Amount</li>
        </ul>
        <ul className={classes.cart__list__item}>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </ul>
      </div>
      <div className={classes.cart__information}>
        <p>{total}</p>
        <Button>Checkout</Button>
      </div>
    </section>
  );
};

export default Cart;
