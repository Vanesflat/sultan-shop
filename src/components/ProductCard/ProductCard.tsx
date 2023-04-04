import { Product } from '../../types/product';
import Capacity from '../Capacity/Capacity';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../enums';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <article className="product__card">
      <Link className="product__img-wrapper" to={generatePath(AppRoute.Product, { id: `${product.id}` })}>
        <img className="product__img" src={product.imgUrl} alt={product.name} />
      </Link>
      <div className="product__about">
        <Capacity sizeType={product.sizeType} size={product.size} />
        <Link className="product__name" to={generatePath(AppRoute.Product, { id: `${product.id}` })}>{product.name}</Link>
        <p className="product__info">{product.description}</p>
      </div>

      <ul className="product__description">
        <li className="product__barcode">Штрихкод: <span>{product.barcode}</span></li>
        <li className="product__producer">Производитель: <span>{product.producer}</span></li>
        <li className="product__brand">Бренд: <span>{product.brand}</span></li>
      </ul>

      <div className="product__controls">

        <div className="product__counter counter">
          <button className="counter__btn counter__btn--minus">-</button>
          <span className="counter__count">1</span>
          <button className="counter__btn counter__btn--plus">+</button>
        </div>

        <p className="product__price">{product.price} ₸</p>

        <button className="btn btn--medium btn--basket">
          <p className="btn__text">в корзину</p>
        </button>

        <button className="btn btn--small btn--delete">
          <img src="images/catalog/trash.png" alt="Удалить" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;