import { call, put, throttle } from 'redux-saga/effects';
import { getListProduct, setError, setListProduct } from './index';
import { productAPI } from '../../services/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

export function* getListProductSaga(action: PayloadAction<AxiosRequestConfig>) {
  try {
    const { data } = yield call(productAPI.get, action.payload);
    yield put(setListProduct(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getListProductWatcher() {
  yield throttle(500, getListProduct.toString(), getListProductSaga);
}
