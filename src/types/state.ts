import { SortType } from '../enums';
import { setupStore, rootReducer } from '../store/store';
import { Product } from './product';

export type InitialState = {
  products: Product[];
  sortType: SortType;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
