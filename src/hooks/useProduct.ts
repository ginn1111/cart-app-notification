import { useParams } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import {
  productListSelector,
  productStatusSelector,
} from 'app/productSlice/selectors';
import useError from './useError';

const useProduct = () => {
  const { id } = useParams();
  const productList = useAppSelector(productListSelector);
  const loadingStatus = useAppSelector(productStatusSelector);
  const message = useError('product');

  const isLoading = loadingStatus === 'pending';
  const isError = loadingStatus === 'error';

  const product = productList.find((product) => product.id === id);

  return { product, isLoading, errorMessage: message, isError };
};

export default useProduct;
