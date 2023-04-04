import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import permissionReducer from './permissionSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  cart: cartReducer,
  product: productReducer,
  permissions: permissionReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type SliceName = keyof typeof rootReducer;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
