// import { useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import ProductList from '../components/ProductList/ProductList';
import Sort from '../components/Sort/Sort';
import Tabs from '../components/Tabs/Tabs';
import products from '../data/products.json';
// import { useAppDispatch, useAppSelector } from '../hooks/store';
import { Product } from '../types/product';
// import { loadProducts } from '../store/productsSlice';

function Catalog(): JSX.Element {
  localStorage.setItem('products', JSON.stringify(products));

  let productsList;
  let ls = localStorage.getItem('products');
  if (ls) {
    productsList = JSON.parse(ls) as Product[];
  }

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadProducts());
  // }, []);

  // const productsList: Product[] = useAppSelector((state) => state.products);

  return (
    <Layout pageTitle="Каталог">
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title title">Косметика и гигиена</h2>

          <Tabs classNames="catalog" />

          <div className="catalog__wrapper">

            <Filters products={productsList} />

            <div className="catalog__content">

              <Sort />

              <ProductList classNames="catalog" products={productsList} />

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
