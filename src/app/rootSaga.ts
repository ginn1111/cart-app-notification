import { all } from 'redux-saga/effects';
import { rootProductSaga } from './productSlice/saga';
import { rootCartSaga } from './cartSlice/saga';

function* rootSaga() {
  yield all([rootProductSaga(), rootCartSaga()]);
}

export default rootSaga;
