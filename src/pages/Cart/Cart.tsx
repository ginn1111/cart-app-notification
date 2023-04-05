import { Link } from 'react-router-dom';
import CartItem from 'components/Cart/CartItem/CartItem';
import Button from 'components/common/Button/Button';

import useCart from './hooks/useCart';
import usePermission from 'hooks/usePermission';

import './cart.scss';

const Cart = () => {
  const { cartItems, total } = useCart();
  usePermission('notifications');

  const checkoutHandler = async () => {
    try {
      const status = await navigator.permissions.query({
        name: 'notifications',
      });
      if (status.state !== 'granted') {
        Notification.requestPermission();
      } else {
        new Notification('Order successfully!', {
          body: `Thanks for your order!\n Total: ${total}`,
        });
      }
    } catch (error) {}
  };

  if (cartItems.length === 0) {
    return (
      <div className="shop-now">
        <Link to="/" className="btn">
          <p>Shop now</p>
        </Link>
      </div>
    );
  }

  return (
    <section className="cart">
      <div className="cart__list">
        <ul className="cart__list__header">
          <li>Product</li>
          <li>Price</li>
          <li>Amount</li>
        </ul>
        <ul className="cart__list__item">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </ul>
      </div>
      <div className="cart__information">
        <p>Total: {total}</p>
        <div className="cart__information__btn">
          <Button onClick={total !== 0 ? checkoutHandler : () => {}}>
            Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
