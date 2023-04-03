import { useParams } from 'react-router-dom';
import AmountButton from '../components/common/AmountButton';
import classes from './ProductDetail.module.scss';
import Button from '../components/common/Button';
import { PRODUCT_LIST_DUMMY } from './ProductList';
import { useRef } from 'react';
import type { AmountProps } from '../components/common/AmountButton';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../app/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const amountRef = useRef<AmountProps>(null);
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    if (id) {
      dispatch(addToCart(amountRef?.current?.amount ?? 0, Number(id)));
    }
  };

  let product;
  if (id) {
    product = PRODUCT_LIST_DUMMY.find((product) => product.id === Number(id));
  }

  return (
    <div className={classes.product}>
      <div className={classes.product__img}>
        <img src={product?.imageUrl} alt={`Product ${product?.name}`} />
      </div>
      <div className={classes.product__information}>
        <p className={classes.product__information__title}>{product?.name}</p>
        <p className={classes.product__information__description}>
          {product?.description}
        </p>
        <div className={classes.product__information__amount}>
          <AmountButton ref={amountRef} initValue={1} />
        </div>
        <div className={classes.product__information__add}>
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
