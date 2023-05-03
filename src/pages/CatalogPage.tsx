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

type CatalogPageProps = {
  products: Product[];
}

function CatalogPage({ products }: CatalogPageProps): JSX.Element {
  const sortType = useAppSelector(getCurrentSortType);
  const category = useAppSelector(getCurrentCategory);
  const sortedProducts = getSortedProducts(products, sortType);
  const filteredProducts = getFilteredProducts(sortedProducts, category);

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

              <ProductList classNames="catalog" products={filteredProducts} />

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

export default CatalogPage;
