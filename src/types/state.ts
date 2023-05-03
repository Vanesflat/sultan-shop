import { AxiosInstance } from 'axios';
import { setupStore, rootReducer } from '../store/store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};
