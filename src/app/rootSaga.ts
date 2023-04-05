import { all } from 'redux-saga/effects';
import { rootProductSaga } from './productSlice/saga';
import { addToCartWatcher, deleteCartItemWatcher } from './cartSlice/saga';

function* rootSaga() {
  yield all([rootProductSaga(), addToCartWatcher(), deleteCartItemWatcher()]);
}

export default rootSaga;
