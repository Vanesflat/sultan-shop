export default function Product(): JSX.Element {
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
                <a className="bread-crumbs__link" href="/#">Косметика и гигиена</a>
              </li>

              <li className="bread-crumbs__item">
                <a className="bread-crumbs__link bread-crumbs__link--active" href="/#">Название товара</a>
              </li>

            </ul>
          </div>
        </section>

        <article className="product-card">
          <div className="container">
            <div className="product-card__wrapper">

              <img className="product-card__img" src="images/product/product.png" alt="Товар" />

              <div className="product-card__content">

                <div className="product-card__marker">
                  <span>В наличии</span>
                </div>

                <h2 className="product-card__name">
                  <span>BioMio BIO-SOAP</span> Экологичное туалетное мыло. Литсея и бергамот
                </h2>

                <p className="product-card__capacity product-card__capacity--box">450г</p>

                <div className="product-card__price-group">
                  <p className="product-card__price">48,76 ₸</p>

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
                  <li className="product-card__feature">Производитель: <span>BioMio</span></li>
                  <li className="product-card__feature">Бренд: <span>BioMio</span></li>
                  <li className="product-card__feature">Артикул: <span>460404</span></li>
                  <li className="product-card__feature">Штрихкод: <span>4604049097548</span></li>
                </ul>

                <div className="product-card__description">
                  <p className="product-card__title">Описание</p>
                  <p className="product-card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
                    iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
                    pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper
                    enim, malesuada.
                  </p>
                </div>

                <div className="product-card__features-box">
                  <p className="product-card__title">Характеристики</p>

                  <ul className="product-card__features">
                    <li className="product-card__feature">Назначение: <span>BioMio</span></li>
                    <li className="product-card__feature">Тип: <span>BioMio</span></li>
                    <li className="product-card__feature">Производитель: <span>BioMio</span></li>
                    <li className="product-card__feature">Бренд: <span>BioMio</span></li>
                    <li className="product-card__feature">Артикул: <span>460404</span></li>
                    <li className="product-card__feature">Штрихкод: <span>4604049097548</span></li>
                    <li className="product-card__feature">Вес: <span>90 г</span></li>
                    <li className="product-card__feature">Объем: <span>90 г</span></li>
                    <li className="product-card__feature">Кол-во в коробке: <span>90 г</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </article>

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
  )
}