import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ProductSliceType = {
  productList: [],
  loadingStatus: 'idle',
  error: null,
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    getListProduct(state, action) {
      state.loadingStatus = 'pending';
    },
    setListProduct(state, action) {
      Object.assign(state, {
        loadingStatus: 'success',
        productList: state.productList.concat(action.payload),
      });
    },
    setError(state, action) {
      Object.assign(state, {
        loadingStatus: 'error',
        error: action.payload,
      });
    },
    getProduct(state, action) {
      state.loadingStatus = 'pending';
    },
    setProduct(state, action) {
      Object.assign(state, {
        loadingStatus: 'success',
        product: action.payload,
      });
    },
  },
  extraReducers: (builder) => {},
});

export const {
  getListProduct,
  setListProduct,
  setError,
  getProduct,
  setProduct,
} = productSlice.actions;
export default productSlice.reducer;
