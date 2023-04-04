import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';

function BasketBtn(): JSX.Element {
  return (
    <Link className="basket" to={AppRoute.Basket}>
      <div className="basket__box">
        <button className="backet__btn">
          <img src="../images/header/main-basket.svg" alt="Корзина" />
        </button>
        <span className="basket__count">3</span>
      </div>

      <div className="basket__info">
        <p className="basket__title">Корзина</p>
        <p className="basket__price">12 478 ₸</p>
      </div>

    </Link>
  );
}

export default BasketBtn;