import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const productSelector = (state: RootState) => state.product;

export const productListSelector = createSelector(
  productSelector,
  (product) => product.productList
);

export const productStatusSelector = createSelector(
  productSelector,
  (product) => product.loadingStatus
);
