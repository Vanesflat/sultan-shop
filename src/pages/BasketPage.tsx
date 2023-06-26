import BasketContent from '../components/BasketContent/BasketContent';
import Layout from '../components/Layout/Layout';

function BasketPage(): JSX.Element {

  return (
    <Layout pageTitle="Корзина">
      <section className="basket-page">
        <BasketContent />
      </section>
    </Layout>
  );
}

export default BasketPage;
