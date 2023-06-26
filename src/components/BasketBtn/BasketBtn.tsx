import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { useAppSelector } from '../../hooks/store';
import { getBasketProducts, getTotalPrice } from '../../store/reducers/Basket/selectors';

function BasketBtn(): JSX.Element {
  const products = useAppSelector(getBasketProducts);
  const totalPrice = useAppSelector(getTotalPrice);
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