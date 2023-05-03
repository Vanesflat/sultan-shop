import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoute } from '../enums';
import { Product } from '../types/product';
import { ThunkOptions } from '../types/state';

export const fetchProductsAction = createAsyncThunk<Product[], undefined, ThunkOptions>(
  'data/fetchProducts',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Product[]>(AppRoute.Products);

      return data;
    } catch {
      throw new Error();
    }
  }
);