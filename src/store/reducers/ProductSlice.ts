import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import products from '../../data/products.json';
import { CategoryList, SortType } from '../../enums';

const DEFAULT_SORT_TYPE = SortType.PriceToHigh;

type InitialState = {
  products: Product[];
  sortType: SortType;
  category: CategoryList | null;
};

const initialState: InitialState = {
  products: [],
  sortType: DEFAULT_SORT_TYPE,
  category: null
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
    },

    changeCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const {
  loadProducts,
  changeSortType,
  changeCategory
} = ProductSlice.actions;

export default ProductSlice.reducer;
