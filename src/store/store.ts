import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductSlice';
import basketReducer from './reducers/BasketSlice';

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
