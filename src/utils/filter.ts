import { Category } from '../enums';
import { Product } from '../types/product';

export const getFilteredProducts = (products: Product[], category: Category | null): Product[] => {
  if (!category) {
    return products;
  }

  return [...products].filter((product) => product.types.includes(category));
};
