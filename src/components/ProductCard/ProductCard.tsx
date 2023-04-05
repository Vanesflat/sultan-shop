import { Product } from '../../types/product';
import Capacity from '../Capacity/Capacity';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addProduct, removeProduct, minusProduct } from '../../store/reducers/BasketSlice';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps): JSX.Element {
  const productItem = useAppSelector((state) => state.basketReducer.products.find((productEl) => productEl.id === product.id))
  const dispatch = useAppDispatch();

  const addedCount = productItem ? productItem.count : 0;

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
          <button className="counter__btn counter__btn--minus" onClick={() => dispatch(minusProduct(product))}>-</button>
          <span className="counter__count">{addedCount}</span>
          <button className="counter__btn counter__btn--plus" onClick={() => dispatch(addProduct(product))}>+</button>
        </div>

        <p className="product__price">{product.price} ₸</p>

        <button
          className="btn btn--medium btn--basket"
          onClick={() => dispatch(addProduct(product))}
        >
          <p className="btn__text">в корзину</p>
        </button>

        <button className="btn btn--small btn--delete" onClick={() => dispatch(removeProduct(product))}>
          <img src="images/catalog/trash.svg" alt="Удалить" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;