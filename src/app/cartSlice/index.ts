import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  productId: number;
  amount: number;
};

type Cart = {
  loadingStatus: 'idle' | 'pending' | 'success' | 'error';
  error: any;
  items: Array<CartItem>;
};

const INITIAL_STATE: Cart = {
  items: [],
  loadingStatus: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        const oldItem = state.items.find(
          (item) => item.productId === action.payload.productId
        );
        if (oldItem) {
          oldItem.amount += action.payload.amount;
        } else {
          state.items.push(action.payload);
        }
      },
      prepare: (amount: number, productId: number) => ({
        payload: {
          amount,
          productId,
          id: nanoid(),
        },
      }),
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
