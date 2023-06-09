export enum Category {
  Body = 'Уход за телом',
  Hands = 'Уход за руками',
  Legs = 'Уход за ногами',
  Face = 'Уход за лицом',
  Hair = 'Уход за волосами',
  Tan = 'Средства для загара',
  Shaving = 'Средства для бритья',
  Gift = 'Подарочные наборы',
  Hygiene = 'Гигиеническая продукция',
  Mouth = 'Гигиена полости рта',
  Paper = 'Бумажная продукция'
};

export enum SortType {
  NameToZ = 'Название А-Я',
  NameToA = 'Название Я-А',
  PriceToHigh = 'Цена ↑',
  PriceToLow = 'Цена ↓',
};

export enum AppRoute {
  Catalog = '/',
  Products = '/products',
  Product = '/product/:id',
  Basket = '/basket'
};

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
};

export enum NameSpace {
  Products = 'PRODUCTS',
  Basket = 'BASKET'
}
