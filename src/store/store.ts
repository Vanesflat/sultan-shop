import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/Products/Products';
import basketReducer from './reducers/Basket/Basket';
import { createAPI } from '../services/api';
import { NameSpace } from '../enums';

export const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsReducer,
  [NameSpace.Basket]: basketReducer
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
