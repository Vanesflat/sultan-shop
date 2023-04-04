import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { InitialState } from '../../types/state';
import products from '../../data/products.json';


const initialState: InitialState = {
  products: []
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
    }
  }
});

export default ProductSlice.reducer;
