import { useMemo } from 'react';
import { cartItemsSelector } from 'app/cartSlice/selectors';
import { useAppSelector } from 'app/hooks';
import { productListSelector } from 'app/productSlice/selectors';

const useCart = () => {
  const productList = useAppSelector(productListSelector);
  const _cartItems = useAppSelector(cartItemsSelector);

  const cartItems = useMemo(() => {
    return _cartItems.map((item) => ({
      ...productList.find(({ id }) => id === item.productId),
      amount: item.amount,
      id: item.id,
      productId: item.productId,
    }));
  }, [_cartItems, productList]);

  const total = cartItems.reduce(
    (acc, item) => acc + (item?.price ?? 0) * item.amount,
    0
  );

  return { cartItems, total };
};

export default useCart;
