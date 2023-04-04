import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE: CartSliceType = {
  items: [],
  loadingStatus: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        state.loadingStatus = 'pending';
      },
      prepare: (amount: number, productId: string) => ({
        payload: {
          amount,
          productId,
          id: nanoid(),
        },
      }),
    },
    setCartItems: (state, action: PayloadAction<CartItem>) => {
      state.loadingStatus = 'success';
      const oldItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (oldItem) {
        oldItem.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },
    setError: (state, action) => {
      Object.assign(state, {
        loadingStatus: 'error',
        error: action.payload,
      });
    },
    deleteCartItem: (state, action) => {
      state.loadingStatus = 'pending';
    },
    deleteCartItemSuccess: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      idx !== -1 && state.items.splice(idx, 1);
      state.loadingStatus = 'success';
    },
  },
  extraReducers: (builder) => {},
});

export const {
  deleteCartItem,
  deleteCartItemSuccess,
  addToCart,
  setError,
  setCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
