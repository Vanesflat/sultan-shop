import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { InitialState } from '../../types/state';
import products from '../../data/products.json';
import { SortType } from '../../enums';

const DEFAULT_SORT_TYPE = SortType.PriceToHigh;

const initialState: InitialState = {
  products: [],
  sortType: DEFAULT_SORT_TYPE
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state) => {
      let ls = localStorage.getItem('products');
      if (ls) {
        state.products = JSON.parse(ls) as Product[];
      } else {
        localStorage.setItem('products', JSON.stringify(products));
        state.products = products as Product[];
      }
    },

    changeSortType: (state, action) => {
      state.sortType = action.payload;
    }
  }
});

export const {
  loadProducts,
  changeSortType
} = ProductSlice.actions;

export default ProductSlice.reducer;
