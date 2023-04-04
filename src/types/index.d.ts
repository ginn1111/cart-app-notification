import { AxiosError } from 'axios';

declare global {
  export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  };

  export type CartItem = {
    id: string;
    productId: string;
    amount: number;
  };

  export type CartSliceType = {
    items: Array<CartItem>;
  } & Status;

  export type ProductSliceType = {
    productList: Array<Product>;
  } & Status;

  export type Status = {
    loadingStatus: 'idle' | 'pending' | 'success' | 'error';
    error: Error | AxiosError | null;
  };
}
