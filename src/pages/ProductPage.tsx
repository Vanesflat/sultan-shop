import Layout from '../components/Layout/Layout';
import { Product } from '../types/product';
import Capacity from '../components/Capacity/Capacity';
import Mark from '../components/Mark/Mark';
import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';

type ProductPageProps = {
  products: Product[];
};

function ProductPage({ products }: ProductPageProps): JSX.Element {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  const { id } = useParams();

  const product = products.find((offerItem) => offerItem.id === id);

  if (!product) {
    return (<Navigate to='/' />);
  }

  return (
    <Layout>
      <article className="product-card">
        <div className="container">
          <div className="product-card__wrapper">

            <img className="product-card__img" src={product.imgUrl} alt={product.name} />

            <div className="product-card__content">

              {product.inStock && <Mark text="В наличии" />}

              <h2 className="product-card__name">{product.name}</h2>

              <Capacity sizeType={product.sizeType} size={product.size} />

              <div className="product-card__price-group">
                <p className="product-card__price">{product.price} ₸</p>

                <div className="product-card__counter counter">
                  <button className="counter__btn counter__btn--minus">-</button>
                  <span className="counter__count">1</span>
                  <button className="counter__btn counter__btn--plus">+</button>
                </div>

                <button className="btn btn--medium btn--basket">
                  <p className="btn__text">В корзину</p>
                </button>
              </div>

              <ul className="product-card__info-list">
                <li className="product-card__info-item">
                  <button className="product-card__btn-share">
                    <img src="../images/product/share.svg" alt="Поделиться" />
                  </button>
                </li>

                <li className="product-card__info-item">
                  <p className="product-card__info">
                    При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
                  </p>
                </li>

                <li className="product-card__info-item">
                  <button className="product-card__btn-price btn btn--price">
                    <p className="btn__text">Прайс-лист</p>
                  </button>
                </li>
              </ul>

              <ul className="product-card__features">
                <li className="product-card__feature">Производитель: <span>{product.producer}</span></li>
                <li className="product-card__feature">Бренд: <span>{product.brand}</span></li>
                <li className="product-card__feature">Штрихкод: <span>{product.barcode}</span></li>
              </ul>

              <div className="product-card__description">
                <p
                  className={cn('product-card__title', descriptionVisible && 'product-card__title--active')}
                  onClick={() => setDescriptionVisible(!descriptionVisible)}
                >
                  Описание
                </p>
                {descriptionVisible && (<p className="product-card__text">{product.description}</p>)}
              </div>

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
            </div>

          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage;
