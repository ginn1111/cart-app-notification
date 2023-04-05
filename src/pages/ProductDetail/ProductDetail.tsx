import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import AmountButton from 'components/common/AmountButton/AmountButton';
import Button from 'components/common/Button/Button';
import type { AmountProps } from 'components/common/AmountButton/AmountButton';

import useProduct from 'pages/ProductDetail/hooks/useProduct';
import useError from 'hooks/useError';

import { addToCart } from 'app/cartSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartStatusSelector } from 'app/cartSlice/selectors';

import { toast } from 'react-toastify';

import './productDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const amountRef = useRef<AmountProps>(null);
  const loadingStatus = useAppSelector(cartStatusSelector);
  const errorAddToCart = useError('cart');
  const dispatch = useAppDispatch();

  const { isLoading, isError, product, errorMessage } = useProduct();

  const isLoadingAddToCart = loadingStatus === 'pending';

  const isErroRAddToCart = loadingStatus === 'error';

  useEffect(() => {
    isErroRAddToCart && toast(errorAddToCart, { type: 'error' });
  }, [isErroRAddToCart, errorAddToCart]);

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
    <div className="product-detail">
      <div className="product-detail__img">
        <img src={product?.imageUrl} alt={`Product ${product?.name}`} />
      </div>
      <div className="product-detail__information">
        <p className="product-detail__information__title">{product?.name}</p>
        <p className="product-detail__information__description">
          {product?.description}
        </p>
        <div className="product-detail__information__controls">
          <div className="product-detail__information__amount">
            <AmountButton ref={amountRef} initValue={1} />
          </div>
          <div className="product-detail__information__add">
            <Button loading={isLoadingAddToCart} onClick={addToCartHandler}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
