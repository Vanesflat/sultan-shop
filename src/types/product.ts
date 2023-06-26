export type Product = {
  id: string,
  imgUrl: string,
  name: string,
  sizeType: 'weight' | 'volume',
  size: string,
  barcode: string,
  producer: string,
  brand: string,
  description: string,
  price: string,
  inStock: boolean,
  types: string[],
  count: number
};

export type Producer = Record<string, number>;
