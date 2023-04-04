import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductSlice';

export const rootReducer = combineReducers({
  productsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
