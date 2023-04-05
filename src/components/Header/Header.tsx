import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums';
import BasketBtn from '../BasketBtn/BasketBtn';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">

          <div className="header-top__contacts contacts">
            <ul className="contacts__list">
              <li className="contacts__item contacts__item--pin">
                <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                <p>(Рынок Восточный)</p>
              </li>
              <li className="contacts__item contacts__item--mail">
                <b>opt.sultan@mail.ru</b>
                <p>На связи в любое время</p>
              </li>
            </ul>
          </div>

          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="/#">О компании</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Доставка и оплата</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Возврат</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Контакты</a>
              </li>
            </ul>
          </nav>

        </div>

        <div className="header-bottom">

          <button className="burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a className="header__logo" href="/#">
            <img src="../images/logo.png" alt="Логотип" />
          </a>

          <Link className="header__btn btn btn--catalog" to={AppRoute.Catalog}>
            <p className="btn__text">Каталог</p>
          </Link>

          <form className="form form--search" action="/">
            <input className="form__input" type="text" placeholder="Поиск..." />
            <button className="form__btn" type="submit">
              <img src="../images/header/search.svg" alt="Найти" />
            </button>
          </form>

          <div className="callback">
            <div className="callback__info">
              <b className="callback__phone">+7 (777) 490-00-91</b>
              <p className="callback__text">время работы: 9:00-20:00</p>
              <button className="callback__btn">Заказать звонок</button>
            </div>

            <img className="callback__avatar" src="../images/header/support-avatar.png" alt="Аватар сотрудника поддержки" />
          </div>

          <button className="header__btn btn btn--price">
            <p className="btn__text">Прайс-лист</p>
          </button>

          <BasketBtn />

        </div>

        <div className="mobile-menu__controls">
          <button className="btn-mobile btn-mobile--catalog">
            <p className="btn-mobile__text">Каталог</p>
          </button>

          <button className="btn-mobile btn-mobile--search">
            <p className="btn-mobile__text">Поиск</p>
          </button>
        </div>

        <div className="mobile-menu">
          <div className="contacts">
            <ul className="contacts__list">
              <li className="contacts__item contacts__item--pin">
                <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                <p>(Рынок Восточный)</p>
              </li>
              <li className="contacts__item contacts__item--mail">
                <b>opt.sultan@mail.ru</b>
                <p>На связи в любое время</p>
              </li>
              <li className="contacts__item contacts__item--call">
                <b>Отдел продаж</b>
                <p>+7 (777) 490-00-91</p>
                <p>время работы: 9:00-20:00</p>
              </li>
              <button className="contacts__btn">Заказать звонок</button>
            </ul>
          </div>

          <nav className="menu menu--mobile">
            <p className="menu__title">Меню сайта:</p>
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="/#">О компании</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Доставка и оплата</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Возврат</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/#">Контакты</a>
              </li>
            </ul>
          </nav>

          <button className="btn btn--price">
            <p className="btn__text">Прайс-лист</p>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
