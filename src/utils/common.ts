import { Producer, Product } from '../types/product';

export const getProducers = (products: Product[]) =>
  products.reduce((acc: Producer, product) => {
    const producer = product.producer;

    if (!acc[producer]) {
      acc[producer] = 1;
    } else {
      acc[producer]++;
    }

    return acc;
  }, {});
