import { Product } from '../../types/product';
import { useState } from 'react';
import cn from 'classnames';

type ProductDescriptionProps = {
  product: Product;
};

function ProductDescription({ product }: ProductDescriptionProps): JSX.Element {
  const [descriptionVisible, setDescriptionVisible] = useState(true);

  return (
    <div className="product-card__description">
      <p
        className={cn('product-card__title', descriptionVisible && 'product-card__title--active')}
        onClick={() => setDescriptionVisible(!descriptionVisible)}
      >
        Описание
      </p>
      {descriptionVisible && (<p className="product-card__text">{product.description}</p>)}
    </div>
  );
}

export default ProductDescription;
