import { useState } from 'react';
import { PRODUCTS_PER_PAGE } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { getFilteredProducts } from '../../store/reducers/Products/selectors';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';
import ProductList from '../ProductList/ProductList';
import Sort from '../Sort/Sort';

function CatalogContent(): JSX.Element {
  const filteredProducts = useAppSelector(getFilteredProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const renderedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  return (
    <div className="catalog__wrapper">

      <Filters />

      <div className="catalog__content">

        <Sort />

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
  )
}

export default CatalogContent;
