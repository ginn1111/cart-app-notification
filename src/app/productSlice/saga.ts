import { takeLatest, call, put } from 'redux-saga/effects';
import { getListProduct, setError, setListProduct } from './index';
import { productAPI } from '../../services/api';

export function* getListProductSaga() {
  try {
    const { data } = yield call(productAPI.get);
    yield put(setListProduct(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getListProductWatcher() {
  yield takeLatest(getListProduct.toString(), getListProductSaga);
}
