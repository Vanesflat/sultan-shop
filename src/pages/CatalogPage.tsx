import Layout from '../components/Layout/Layout';
import { useAppDispatch } from '../hooks/store';
import Categories from '../components/Categories/Categories';
import { useEffect } from 'react';
import { fetchProductsAction } from '../store/api-actions';
import CatalogContent from '../components/CatalogContent/CatalogContent';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return (
    <Layout pageTitle="Каталог">
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title title">Косметика и гигиена</h2>
          <Categories classNames="catalog" />
          <CatalogContent />
        </div>
      </section>
    </Layout>
  );
}

export default CatalogPage;
