import Layout from '../components/Layout/Layout';
import { Product } from '../types/product';
import Capacity from '../components/Capacity/Capacity';
import Mark from '../components/Mark/Mark';

type ProductPageProps = {
  product: Product;
};

function ProductPage({ product }: ProductPageProps): JSX.Element {
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
                <p className="product-card__price">{product.price}</p>

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
                    <img src="images/product/share.svg" alt="Поделиться" />
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
                <p className="product-card__title">Описание</p>
                <p className="product-card__text">{product.description}</p>
              </div>

              <div className="product-card__features-box">
                <p className="product-card__title">Характеристики</p>

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
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage;
