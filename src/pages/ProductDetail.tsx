import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import AmountButton from 'components/common/AmountButton';
import Button from 'components/common/Button';
import type { AmountProps } from 'components/common/AmountButton';

import useProduct from 'hooks/useProduct';
import useError from 'hooks/useError';

import { addToCart } from 'app/cartSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartStatusSelector } from 'app/cartSlice/selectors';

import classes from './ProductDetail.module.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const amountRef = useRef<AmountProps>(null);
  const loadingStatus = useAppSelector(cartStatusSelector);
  const message = useError('cart');
  const dispatch = useAppDispatch();

  const { isLoading, isError, product, errorMessage } = useProduct();

  const isLoadingAddToCart = loadingStatus === 'pending';

  // Toast error
  const isErroRAddToCart = loadingStatus === 'error';

  const addToCartHandler = () => {
    id && dispatch(addToCart(amountRef?.current?.amount ?? 0, id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{errorMessage}</p>;
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
          <Button loading={isLoadingAddToCart} onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
