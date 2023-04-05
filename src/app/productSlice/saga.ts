import { all, call, put, takeEvery, throttle } from 'redux-saga/effects';
import { getListProduct, setError, setListProduct, setProduct } from './index';
import { productAPI } from '../../services/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { getProduct } from './index';

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
  yield throttle(500, getListProduct.toString(), getListProductSaga);
}

function* getProductWatcher() {
  yield takeEvery(getProduct.toString(), getProductSaga);
}

export function* rootProductSaga() {
  yield all([getListProductWatcher(), getProductWatcher()]);
}
