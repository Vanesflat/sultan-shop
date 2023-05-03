import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductSlice';
import basketReducer from './reducers/BasketSlice';
import { createAPI } from '../services/api';

export const api = createAPI();

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        },
      })
  })
}
