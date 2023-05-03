import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../enums';
import { Product } from '../../../types/product';

type InitialState = {
  products: Product[];
  totalPrice: number;
};

const initialState: InitialState = {
  products: [],
  totalPrice: 0,
};

export const BasketSlice = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findedProduct = state.products.find((product) => product.id === action.payload.id);

      if (findedProduct) {
        findedProduct.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.products.reduce((acc, product: Product) => {
        return acc + (parseFloat(product.price) * product.count);
      }, 0);
    },

    minusProduct: (state, action) => {
      const findedProduct = state.products.find((product) => product.id === action.payload.id);

      if (findedProduct?.count === 1) {
        state.products = state.products.filter((product) => product.id !== action.payload.id);
      }

      if (findedProduct) {
        findedProduct.count--;
      }

      state.totalPrice = state.products.reduce((acc, product: Product) => {
        return acc + (parseFloat(product.price) * product.count);
      }, 0);
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
      state.totalPrice = state.products.reduce((acc, product: Product) => {
        return acc + (parseFloat(product.price) * product.count);
      }, 0);
    },

    clearProducts: (state) => {
      state.products = [];
      state.totalPrice = 0;
    }
  }
});

export const {
  addProduct,
  minusProduct,
  removeProduct,
  clearProducts
} = BasketSlice.actions;

export default BasketSlice.reducer;
