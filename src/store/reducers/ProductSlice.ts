import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { CategoryList, SortType } from '../../enums';
import { fetchProductsAction } from '../api-actions';

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
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },

    changeCategory: (state, action) => {
      state.category = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  }
});

export const {
  changeSortType,
  changeCategory
} = ProductSlice.actions;

export default ProductSlice.reducer;
