import { store } from '../store/store';
import { Product } from './product';

export type InitialState = {
  products: Product[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;