import Layout from '../components/Layout/Layout';
import Capacity from '../components/Capacity/Capacity';
import Mark from '../components/Mark/Mark';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute } from '../enums';
import { addProduct } from '../store/reducers/Basket/Basket';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { getProducts } from '../store/reducers/Products/selectors';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import ProductFeatures from '../components/ProductFeatures/ProductFeatures';

function ProductPage(): JSX.Element {
  const products = useAppSelector(getProducts);


  const { id } = useParams();
  const dispatch = useAppDispatch();

  const product = products.find((offerItem) => offerItem.id === id);

  if (!product) {
    return (<Navigate to={AppRoute.Catalog} />);
  }

  return (
    <Layout pageTitle={product.name} >
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

                <button
                  className="btn btn--medium btn--basket"
                  onClick={() => dispatch(addProduct(product))}
                >
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

              <ProductDescription product={product} />
              <ProductFeatures product={product} />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage;
