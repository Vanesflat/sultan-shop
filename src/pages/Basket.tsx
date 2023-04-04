import Layout from '../components/Layout/Layout';
import ProductList from '../components/ProductList/ProductList';

function Basket(): JSX.Element {
  return (
    <Layout pageTitle="Корзина">
      <section className="basket-page">
        <div className="container">
          <h2 className="title">Корзина</h2>

          <ProductList classNames="basket-page" products={[]} />

          <div className="basket-page__controls">

            <button className="btn">Оформить заказ</button>
            <p className="basket-page__total">1 348,76 ₸</p>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Basket;
