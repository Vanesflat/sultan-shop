import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../types/product';
import { Category, NameSpace, SortType, Status } from '../../../enums';
import { fetchProductsAction } from '../../api-actions';

const DEFAULT_SORT_TYPE = SortType.PriceToHigh;

type InitialState = {
  products: Product[];
  sortType: SortType;
  category: Category | null;
  producers: string[];
  minPrice: number;
  maxPrice: number;
  status: Status;
};

const initialState: InitialState = {
  products: [],
  sortType: DEFAULT_SORT_TYPE,
  category: null,
  producers: [],
  minPrice: 0,
  maxPrice: 0,
  status: Status.Idle
};

export const ProductsSlice = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },

    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    changeProducer: (state, action) => {
      if (state.producers.includes(action.payload)) {
        state.producers = state.producers.filter((producer) => producer !== action.payload);

        return;
      }

      state.producers.push(action.payload);
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    resetFilters: (state) => {
      state.producers = [];
      state.minPrice = 0;
      state.maxPrice = 0;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = Status.Success;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.status = Status.Error;
      })
  }
});

export const {
  changeSortType,
  changeCategory,
  changeProducer,
  setMaxPrice,
  setMinPrice,
  resetFilters
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
