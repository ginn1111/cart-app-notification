import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  productListSelector,
  productStatusSelector,
} from 'app/productSlice/selectors';
import { getListProduct } from 'app/productSlice';
import useError from 'hooks/useError';

const useProductList = () => {
  const productList = useAppSelector(productListSelector);
  const productStatus = useAppSelector(productStatusSelector);
  const message = useError('product');
  const dispatch = useAppDispatch();

  const oldLengthRef = useRef(0);
  const intersectionRef = useRef<IntersectionObserver>();
  const rootRef = useRef<HTMLUListElement>(null);

  const [pagination, setPagination] = useState({ p: 1, l: 10 });

  const isLoading = productStatus === 'pending';
  const isError = productStatus === 'error';

  const visualizeHandler = (entry: HTMLDivElement) => {
    if (intersectionRef.current) {
      intersectionRef.current.disconnect();
    }

    intersectionRef.current = new IntersectionObserver(
      (entries) => {
        /**
         * old length < product list (when the amount of data reach to the end)
         */
        if (
          oldLengthRef.current < productList.length &&
          !isLoading &&
          entries[0].isIntersecting
        ) {
          setPagination((pagination) => ({
            ...pagination,
            p: pagination.p + 1,
          }));

          oldLengthRef.current = pagination.l * pagination.p;

          intersectionRef.current?.unobserve(entry);
        }
      },
      { root: rootRef.current, threshold: 1 }
    );

    if (entry) {
      intersectionRef.current.observe(entry);
    }
  };

  useEffect(() => {
    dispatch(getListProduct({ params: pagination }));
  }, [dispatch, pagination]);

  return {
    isLoading,
    productList,
    errorMessage: message,
    isError,
    visualizeHandler,
  };
};
export default useProductList;
