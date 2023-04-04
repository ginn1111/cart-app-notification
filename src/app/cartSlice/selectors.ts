import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const cartSelector = (state: RootState) => state.cart;

export const cartStatusSelector = createSelector(
  cartSelector,
  (cart) => cart.loadingStatus
);

export const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.items
);
