import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';

type ProductListProps = {
  classNames: string;
  products: Product[]
};

function ProductList({ classNames, products }: ProductListProps): JSX.Element {
  return (
    <div className={`${classNames}__product-list product__list`}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;