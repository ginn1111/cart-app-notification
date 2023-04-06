import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import {
  getListProduct,
  paginationProduct,
  setError,
  setListProduct,
  setPagination,
  setProduct,
} from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { getProduct } from './index';

import { productAPI } from 'services/api';

export function* paginationProductSaga(
  action: PayloadAction<AxiosRequestConfig>
) {
  try {
    const { data } = yield call(productAPI.get, action.payload);
    yield put(setPagination(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getListProductSaga(action: PayloadAction<AxiosRequestConfig>) {
  try {
    const { data } = yield call(productAPI.get, action.payload);
    yield put(setListProduct(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getProductSaga(action: PayloadAction<string>) {
  try {
    const { data } = yield call(productAPI.getDetail, action.payload);
    yield put(setProduct(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* getListProductWatcher() {
  yield takeLatest(getListProduct.toString(), getListProductSaga);
}

function* getProductWatcher() {
  yield takeEvery(getProduct.toString(), getProductSaga);
}

function* paginationProductWatcher() {
  yield takeEvery(paginationProduct.toString(), paginationProductSaga);
}

export function* rootProductSaga() {
  yield all([
    getListProductWatcher(),
    getProductWatcher(),
    paginationProductWatcher(),
  ]);
}
