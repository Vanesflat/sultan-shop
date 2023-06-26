import { useAppSelector } from '../../hooks/store';
import { getBasketProducts, getTotalPrice } from '../../store/reducers/Basket/selectors';
import ProductList from '../ProductList/ProductList';

function BasketContent(): JSX.Element {
  const products = useAppSelector(getBasketProducts);
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <div className="container">
      <h2 className="title">Корзина</h2>

      <ProductList classNames="basket-page" products={products} />

      <div className="basket-page__controls">

        <button className="btn">Оформить заказ</button>
        <p className="basket-page__total">{totalPrice} ₸</p>

      </div>
    </div>
  );
}

export default BasketContent;
