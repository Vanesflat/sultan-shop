import { NameSpace } from '../../../enums';
import { Product } from '../../../types/product';
import { RootState } from '../../../types/state';

export const getProducts = (state: RootState): Product[] => state[NameSpace.Basket].products;
export const getTotalPrice = (state: RootState): number => state[NameSpace.Basket].totalPrice;