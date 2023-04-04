import { useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import ProductList from '../components/ProductList/ProductList';
import Sort from '../components/Sort/Sort';
import Tabs from '../components/Tabs/Tabs';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { ProductSlice } from '../store/reducers/ProductSlice';

function Catalog(): JSX.Element {
  const { loadProducts } = ProductSlice.actions;
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch, loadProducts]);

  return (
    <Layout pageTitle="Каталог">
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title title">Косметика и гигиена</h2>

          <Tabs classNames="catalog" />

          <div className="catalog__wrapper">

            <Filters products={products} />

            <div className="catalog__content">

              <Sort />

              <ProductList classNames="catalog" products={products} />

              <Pagination />

              <p className="catalog__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut
                justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
                dignissim sed nulla ullamcorper enim, malesuada.
              </p>
            </div>
          </div>

        </div>

      </section>
    </Layout>
  );
}

export default Catalog;
