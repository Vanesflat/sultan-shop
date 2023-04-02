export default function Basket(): JSX.Element {
  return (
    <div className="wrapper">

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
              <img src="images/logo.png" alt="Логотип" />
            </a>

            <button className="header__btn btn btn--catalog">
              <p className="btn__text">Каталог</p>
            </button>

            <form className="form form--search" action="/">
              <input className="form__input" type="text" placeholder="Поиск..." />
              <button className="form__btn" type="submit">
                <img src="images/header/search.svg" alt="Найти" />
              </button>
            </form>

            <div className="callback">
              <div className="callback__info">
                <b className="callback__phone">+7 (777) 490-00-91</b>
                <p className="callback__text">время работы: 9:00-20:00</p>
                <button className="callback__btn">Заказать звонок</button>
              </div>

              <img className="callback__avatar" src="images/header/support-avatar.png" alt="Аватар сотрудника поддержки" />
            </div>

            <button className="header__btn btn btn--price">
              <p className="btn__text">Прайс-лист</p>
            </button>

            <div className="basket">
              <div className="basket__box">
                <button className="backet__btn">
                  <img src="images/header/main-basket.svg" alt="Корзина" />
                </button>
                <span className="basket__count">3</span>
              </div>

              <div className="basket__info">
                <p className="basket__title">Корзина</p>
                <p className="basket__price">12 478 ₸</p>
              </div>

            </div>

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
                  <a className="menu__link" href="product.html">О компании</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="basket.html">Доставка и оплата</a>
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

      <main className="main">

        <section className="bread-crumbs">
          <div className="container">

            <ul className="bread-crumbs__list">

              <li className="bread-crumbs__item">
                <a className="bread-crumbs__link" href="index.html">Главная</a>
              </li>

              <li className="bread-crumbs__item">
                <a className="bread-crumbs__link bread-crumbs__link--active" href="/#">Корзина</a>
              </li>

            </ul>
          </div>
        </section>

        <section className="basket-page">
          <div className="container">
            <h2 className="title">Корзина</h2>

            <div className="basket-page__product-list product__list">

              <article className="product__card">
                <div className="product__img-wrapper">
                  <img className="product__img" src="images/catalog/product-aos.png" alt="Товар" />
                </div>
                <div className="product__about">
                  <p className="product__capacity capacity capacity--bottle">450 мл</p>
                  <p className="product__name"><span>AOS</span> средство для мытья посуды Crystal</p>
                  <p className="product__info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
                    ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.
                  </p>
                </div>

                <ul className="product__description">
                  <li className="product__barcode">Штрихкод: <span>4604049097548</span></li>
                  <li className="product__producer">Производитель: <span>Нэфис</span></li>
                  <li className="product__brand">Бренд: <span>AOS</span></li>
                </ul>

                <div className="product__controls">

                  <div className="product__counter counter">
                    <button className="counter__btn counter__btn--minus">-</button>
                    <span className="counter__count">1</span>
                    <button className="counter__btn counter__btn--plus">+</button>
                  </div>

                  <p className="product__price">48,76 ₸</p>

                  <button className="btn btn--medium btn--basket">
                    <p className="btn__text">в корзину</p>
                  </button>

                  <button className="btn btn--small btn--delete">
                    <img src="images/catalog/trash.png" alt="Удалить" />
                  </button>
                </div>
              </article>

              <article className="product__card">
                <div className="product__img-wrapper">
                  <img className="product__img" src="images/catalog/product-ariel.png" alt="Товар" />
                </div>
                <div className="product__about">
                  <p className="product__capacity capacity capacity--box">15X28.8 г</p>
                  <p className="product__name"><span>ARIEL</span> Автомат Гель СМС жидкое
                    в растворимых капсулах Liquid Capsules Горный родник</p>
                  <p className="product__info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
                    ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.
                  </p>
                </div>

                <ul className="product__description">
                  <li className="product__barcode">Штрихкод: <span>4604049097548</span></li>
                  <li className="product__producer">Производитель: <span>Нэфис</span></li>
                  <li className="product__brand">Бренд: <span>ARIEL</span></li>
                </ul>

                <div className="product__controls">

                  <div className="product__counter counter">
                    <button className="counter__btn counter__btn--minus">-</button>
                    <span className="counter__count">1</span>
                    <button className="counter__btn counter__btn--plus">+</button>
                  </div>

                  <p className="product__price">48,76 ₸</p>

                  <button className="btn btn--medium btn--basket">
                    <p className="btn__text">в корзину</p>
                  </button>

                  <button className="btn btn--small btn--delete">
                    <img src="images/catalog/trash.png" alt="Удалить" />
                  </button>
                </div>
              </article>

              <article className="product__card">
                <div className="product__img-wrapper">
                  <img className="product__img" src="images/catalog/product-bimax.png" alt="Товар" />
                </div>
                <div className="product__about">
                  <p className="product__capacity product__capacity--box">1500 г</p>
                  <p className="product__name"><span>BIMAX</span> Порошок стиральный Автомат 100 пятен COMPACT</p>
                  <p className="product__info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
                    ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.
                  </p>
                </div>

                <ul className="product__description">
                  <li className="product__barcode">Штрихкод: <span>4604049097548</span></li>
                  <li className="product__producer">Производитель: <span>Нэфис</span></li>
                  <li className="product__brand">Бренд: <span>BIMAX</span></li>
                </ul>

                <div className="product__controls">

                  <div className="product__counter counter">
                    <button className="counter__btn counter__btn--minus">-</button>
                    <span className="counter__count">1</span>
                    <button className="counter__btn counter__btn--plus">+</button>
                  </div>

                  <p className="product__price">48,76 ₸</p>

                  <button className="btn btn--medium btn--basket">
                    <p className="btn__text">в корзину</p>
                  </button>

                  <button className="btn btn--small btn--delete">
                    <img src="images/catalog/trash.png" alt="Удалить" />
                  </button>
                </div>
              </article>

            </div>

            <div className="basket-page__controls">

              <button className="btn">Оформить заказ</button>
              <p className="basket-page__total">1 348,76 ₸</p>

            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__left">
              <img className="footer__logo" src="images/footer/logo.png" alt="Логотип" />
              <p className="footer__info">
                Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области
              </p>

              <div className="footer__subscribe">
                <p>Подпишись на скидки и акции</p>

                <form className="form" action="/">
                  <input className="form__input" type="email" placeholder="Введите ваш E-mail" />
                  <button className="form__btn" type="submit">
                    <img src="images/footer/send.svg" alt="Отправить" />
                  </button>
                </form>

              </div>
            </div>

            <ul className="footer__list">
              <li className="footer__item">
                <p className="footer__title">Меню сайта:</p>
                <ul className="footer__sub-menu">
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">О компании</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Доставка и оплата</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Возврат</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Контакты</a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__title">Категории:</p>
                <ul className="footer__sub-menu">
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Бытовая химия</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Косметика и гигиена</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Товары для дома</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Товары для детей и мам</a>
                  </li>
                  <li className="footer__sub-item">
                    <a className="footer__link" href="/#">Посуда</a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__title">Скачать прайс-лист:</p>
                <button className="footer__btn btn btn--price">
                  <p className="btn__text">Прайс-лист</p>
                </button>
                <div className="footer__social">
                  <p>Связь в мессенджерах:</p>
                  <ul className="footer__social-list">
                    <li className="footer__social-item">
                      <a className="footer__social-link" href="/#">
                        <img src="images/footer/whatsapp.svg" alt="Написать в вотсапе" />
                      </a>
                    </li>
                    <li className="footer__social-item">
                      <a className="footer__social-link" href="/#">
                        <img src="images/footer/telegram.svg" alt="Написать в телеграме" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="footer__item">
                <p className="footer__title">Контакты:</p>

                <div className="callback footer__callback">
                  <div className="callback__info">
                    <b className="callback__phone">+7 (777) 490-00-91</b>
                    <p className="callback__text">время работы: 9:00-20:00</p>
                    <button className="callback__btn">Заказать звонок</button>
                  </div>
                </div>

                <div className="footer__email">
                  <a href="/#">opt.sultan@mail.ru</a>
                  <p>На связи в любое время</p>
                </div>

                <ul className="footer__cards">
                  <li className="footer__card">
                    <img src="images/footer/Visa.svg" alt="Карта Виза" />
                  </li>
                  <li className="footer__card">
                    <img src="images/footer/mastercard.svg" alt="Карта Мастеркард" />
                  </li>
                </ul>

              </li>

            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
