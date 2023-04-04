import { all } from 'redux-saga/effects';
import { getListProductWatcher } from './productSlice/saga';
import { addToCartWatcher, deleteCartItemWatcher } from './cartSlice/saga';

function* rootSaga() {
  yield all([
    getListProductWatcher(),
    addToCartWatcher(),
    deleteCartItemWatcher(),
  ]);
}

export default rootSaga;
