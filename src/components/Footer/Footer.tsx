function Footer(): JSX.Element {
  return (
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
  );
}

export default Footer;
