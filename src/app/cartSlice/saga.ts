import { takeEvery, call, put } from 'redux-saga/effects';
import {
  addToCart,
  deleteCartItem,
  deleteCartItemSuccess,
  setCartItems,
  setError,
} from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { cartAPI } from '../../services/api';

export function* addToCartSaga(action: PayloadAction<CartItem>) {
  try {
    const { data } = yield call(cartAPI.add, action.payload);
    yield put(setCartItems(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* deleteCartItemSaga(action: PayloadAction<string>) {
  try {
    yield call(cartAPI.delete, action.payload);
    yield put(deleteCartItemSuccess(action.payload));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* addToCartWatcher() {
  yield takeEvery(addToCart.toString(), addToCartSaga);
}

export function* deleteCartItemWatcher() {
  yield takeEvery(deleteCartItem.toString(), deleteCartItemSaga);
}
