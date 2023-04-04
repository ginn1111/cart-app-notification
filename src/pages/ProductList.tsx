import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  productListSelector,
  productStatusSelector,
} from '../app/productSlice/selectors';
import ProductItem from '../components/ProductItem';
import classes from './ProductList.module.scss';
import { getListProduct } from 'app/productSlice';
import useError from 'hooks/useError';
const ProductList = () => {
  const productList = useAppSelector(productListSelector);
  const productStatus = useAppSelector(productStatusSelector);
  const message = useError('product');
  const dispatch = useAppDispatch();

  const isLoading = productStatus === 'pending';
  const isError = productStatus === 'error';

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  if (isError) {
    return <p>{message}</p>;
  }

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !isError && (
        <ul className={classes['product-list']}>
          {productList.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
