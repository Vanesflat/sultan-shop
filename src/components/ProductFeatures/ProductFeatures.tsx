import { Product } from '../../types/product';
import { useState } from 'react';
import cn from 'classnames';

type ProductFeaturesProps = {
  product: Product;
};

function ProductFeatures({ product }: ProductFeaturesProps): JSX.Element {
  const [featuresVisible, setFeaturesVisible] = useState(false);

  return (
    <div className="product-card__features-box">
      <p
        className={cn('product-card__title', featuresVisible && 'product-card__title--active')}
        onClick={() => setFeaturesVisible(!featuresVisible)}
      >
        Характеристики
      </p>

      {featuresVisible && (
        <ul className="product-card__features">
          <li className="product-card__feature">Назначение: <span>{product.brand}</span></li>
          <li className="product-card__feature">Тип: <span>{product.brand}</span></li>
          <li className="product-card__feature">Производитель: <span>{product.producer}</span></li>
          <li className="product-card__feature">Бренд: <span>{product.brand}</span></li>
          <li className="product-card__feature">Штрихкод: <span>{product.barcode}</span></li>
          <li className="product-card__feature">Вес: <span>{product.size}</span></li>
          <li className="product-card__feature">Объем: <span>{product.size}</span></li>
          <li className="product-card__feature">Кол-во в коробке: <span>1 шт</span></li>
        </ul>
      )}
    </div>
  );
}

export default ProductFeatures;
