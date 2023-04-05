import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  addToCart,
  deleteCartItem,
  deleteCartItemSuccess,
  setCartItems,
  setError,
} from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { cartAPI } from '../../services/api';
import { toast } from 'react-toastify';

export function* addToCartSaga(action: PayloadAction<CartItem>) {
  try {
    const { data } = yield call(cartAPI.add, action.payload);
    toast('Add to cart successfully!', { type: 'success' });
    yield put(setCartItems(data));
  } catch (error) {
    yield put(setError(error));
    toast('Add to cart failed!', { type: 'error' });
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

function* addToCartWatcher() {
  yield takeEvery(addToCart.toString(), addToCartSaga);
}

function* deleteCartItemWatcher() {
  yield takeEvery(deleteCartItem.toString(), deleteCartItemSaga);
}

export function* rootCartSaga() {
  yield all([addToCartWatcher(), deleteCartItemWatcher()]);
}
