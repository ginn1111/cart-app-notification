import { useCallback } from 'react';
import { cartStatusSelector } from 'app/cartSlice/selectors';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { addToCart } from 'app/cartSlice';
import useError from './useError';

const useAddToCart = (id: string) => {
  const cartStatus = useAppSelector(cartStatusSelector);
  const dispatch = useAppDispatch();
  const message = useError('cart');

  const isLoading = cartStatus === 'pending';
  const isError = cartStatus === 'error';

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(1, id));
  }, [id, dispatch]);

  return { isLoading, isError, errorMessage: message, addToCartHandler };
};

export default useAddToCart;
