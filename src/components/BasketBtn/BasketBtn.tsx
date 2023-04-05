import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { useAppSelector } from '../../hooks/store';

function BasketBtn(): JSX.Element {
  const { products, totalPrice } = useAppSelector((state) => state.basketReducer)
  const totalCount = products.reduce((acc, product) => acc + product.count, 0);

  return (
    <Link className="basket" to={AppRoute.Basket}>
      <div className="basket__box">
        <button className="backet__btn">
          <img src="../images/header/main-basket.svg" alt="Корзина" />
        </button>
        {products.length > 0 && (<span className="basket__count">{totalCount}</span>)}
      </div>

      <div className="basket__info">
        <p className="basket__title">Корзина</p>
        <p className="basket__price">{totalPrice} ₸</p>
      </div>

    </Link>
  );
}

export default BasketBtn;