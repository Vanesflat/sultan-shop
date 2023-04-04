import { SortType } from '../enums';
import { Product } from '../types/product';

export const getSortedProducts = (products: Product[], sortType: SortType): Product[] => {
  switch (sortType) {
    case SortType.PriceToHigh:
      return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case SortType.PriceToLow:
      return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case SortType.NameToA:
      return [...products].sort((a, b) => b.name.toLowerCase().localeCompare(a.name));
    case SortType.NameToZ:
      return [...products].sort((a, b) => a.name.toLowerCase().localeCompare(b.name));
  }
};
