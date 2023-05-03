import Layout from '../components/Layout/Layout';
import ProductList from '../components/ProductList/ProductList';
import { useAppSelector } from '../hooks/store';
import { getProducts, getTotalPrice } from '../store/reducers/Basket/selectors';

function Basket(): JSX.Element {
  const products = useAppSelector(getProducts);
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <Layout pageTitle="Корзина">
      <section className="basket-page">
        <div className="container">
          <h2 className="title">Корзина</h2>

          <ProductList classNames="basket-page" products={products} />

          <div className="basket-page__controls">

            <button className="btn">Оформить заказ</button>
            <p className="basket-page__total">{totalPrice} ₸</p>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Basket;
