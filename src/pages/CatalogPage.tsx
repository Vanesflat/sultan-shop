import Filters from '../components/Filters/Filters';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import ProductList from '../components/ProductList/ProductList';
import Sort from '../components/Sort/Sort';
import { useAppSelector } from '../hooks/store';
import { Product } from '../types/product';
import { getSortedProducts } from '../utils/sort';
import Categories from '../components/Categories/Categories';
import { getFilteredProducts } from '../utils/filter';
import { getCurrentCategory, getCurrentSortType } from '../store/reducers/Products/selectors';
import { useState } from 'react';

const PRODUCTS_PER_PAGE = 9;

type CatalogPageProps = {
  products: Product[];
}

function CatalogPage({ products }: CatalogPageProps): JSX.Element {
  const sortType = useAppSelector(getCurrentSortType);
  const category = useAppSelector(getCurrentCategory);
  const sortedProducts = getSortedProducts(products, sortType);
  const filteredProducts = getFilteredProducts(sortedProducts, category);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const renderedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  console.log(currentPage);

  return (
    <Layout pageTitle="Каталог">
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title title">Косметика и гигиена</h2>

          <Categories classNames="catalog" currentCategory={category} />

          <div className="catalog__wrapper">

            <Filters products={products} currentCategory={category} />

            <div className="catalog__content">

              <Sort sortType={sortType} />

              <ProductList classNames="catalog" products={renderedProducts} />

              {pageCount > 1 && <Pagination pageCount={pageCount} onChange={setCurrentPage} />}

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

export default CatalogPage;
