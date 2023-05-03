import { useAppSelector } from '../../hooks/store';
import { getFetchStatus } from '../../store/reducers/Products/selectors';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';

type ProductListProps = {
  classNames: string;
  products: Product[]
};

function ProductList({ classNames, products }: ProductListProps): JSX.Element {
  const fetchStatus = useAppSelector(getFetchStatus);

  return (
    <div className={`${classNames}__product-list product__list`}>
      {fetchStatus.isLoading && Array.from({ length: 6 }, (_, i) => <Skeleton key={i} />)}

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;