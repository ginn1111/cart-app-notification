import { deleteCartItem } from 'app/cartSlice';
import { useAppDispatch } from 'app/hooks';
import './cartItem.scss';

type CartItemProps = {} & CartItem & Partial<Product>;

const CartItem = ({ id, price, imageUrl, amount, name }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const deleteCartItemHandler = () => {
    dispatch(deleteCartItem(id));
  };

  return (
    <li className="cart-item">
      <button onClick={deleteCartItemHandler}>&times;</button>
      <div className="cart-item__wrapper">
        <div className="cart-item__information">
          <div className="cart-item__information__img">
            <img src={imageUrl} alt={`product cart ${name}`} />
          </div>
          <p className="cart-item__information__name">{name}</p>
        </div>
        <p className="cart-item__information__price">{price}</p>
        <p>x {amount}</p>
      </div>
    </li>
  );
};

export default CartItem;
