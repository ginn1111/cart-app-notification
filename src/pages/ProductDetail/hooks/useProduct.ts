import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  productDetailSelector,
  productListSelector,
  productStatusSelector,
} from 'app/productSlice/selectors';
import useError from '../../../hooks/useError';
import { getProduct } from 'app/productSlice';

const useProduct = () => {
  const { id } = useParams();
  const productList = useAppSelector(productListSelector);
  const loadingStatus = useAppSelector(productStatusSelector);
  const _product = useAppSelector(productDetailSelector);
  const message = useError('product');

  const dispatch = useAppDispatch();

  const product = productList.find((product) => product.id === id) || _product;

  const isLoading = loadingStatus === 'pending';
  const isError = loadingStatus === 'error';

  useEffect(() => {
    if (!product) {
      dispatch(getProduct(id));
    }
  }, [product, id, dispatch]);

  return { product, isLoading, errorMessage: message, isError };
};

export default useProduct;
