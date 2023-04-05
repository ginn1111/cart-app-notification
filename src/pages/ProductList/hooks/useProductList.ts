import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  productListSelector,
  productStatusSelector,
} from 'app/productSlice/selectors';
import { getListProduct } from 'app/productSlice';
import useError from 'hooks/useError';

const INIT_PAGINATION = { p: 1, l: 10 };

const useProductList = () => {
  const productList = useAppSelector(productListSelector);
  const productStatus = useAppSelector(productStatusSelector);
  const message = useError('product');
  const dispatch = useAppDispatch();

  const paginationRef = useRef(INIT_PAGINATION);
  const intersectionRef = useRef<IntersectionObserver>();
  const rootRef = useRef<HTMLUListElement>(null);

  const isStart = productStatus === 'idle';
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
        const { p, l } = paginationRef.current;
        const oldLen = p * l;
        if (
          oldLen <= productList.length &&
          !isLoading &&
          entries[0].isIntersecting
        ) {
          paginationRef.current.p = p + 1;

          dispatch(getListProduct({ params: paginationRef.current }));

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
    isStart && dispatch(getListProduct({ params: INIT_PAGINATION }));
  }, [dispatch, isStart]);

  return {
    isLoading,
    productList,
    errorMessage: message,
    isError,
    visualizeHandler,
  };
};
export default useProductList;
