import { Category } from '../enums';
import { Product } from '../types/product';

export const filterProductsByCategory = (products: Product[], category: Category | null): Product[] => {
  if (!category) {
    return products;
  }

  return products.filter((product) => product.types.includes(category));
};

export const filterProductsByProducers = (products: Product[], producers: string[]): Product[] => {
  if (!producers.length) {
    return products;
  }

  return products.filter((product) => producers.includes(product.producer));
};

export const filterProducts = (products: Product[], category: Category | null, producers: string[]) => {
  const filteredProductsByCategory = filterProductsByCategory(products, category);
  const filteredProductsByProducers = filterProductsByProducers(filteredProductsByCategory, producers);

  return filteredProductsByProducers;
};
