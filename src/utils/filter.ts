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

export const getPrice = (products: Product[], type: 'max' | 'min'): string => {
  if (!products.length) {
    return '';
  }

  const sortedProducts = [...products].sort((a, b) => +a.price - +b.price);

  if (type === 'max' && sortedProducts.length) {
    return sortedProducts[sortedProducts.length - 1].price.toString();
  } else {
    return sortedProducts[0].price.toString();
  }
};

export const filterProductsByPrice = (products: Product[], minPrice: number, maxPrice: number): Product[] => {
  if (!minPrice && !maxPrice) {
    return products;
  }

  if (!maxPrice) {
    maxPrice = Infinity;
  }

  return products.filter((product) => +product.price >= minPrice && +product.price <= maxPrice);
};

export const filterProducts = (products: Product[], category: Category | null, producers: string[], minPrice: number, maxPrice: number) => {
  const filteredProductsByCategory = filterProductsByCategory(products, category);
  const filteredProductsByProducers = filterProductsByProducers(filteredProductsByCategory, producers);
  const filteredProductsByPrice = filterProductsByPrice(filteredProductsByProducers, minPrice, maxPrice);

  return filteredProductsByPrice;
};
