import Layout from '../components/Layout/Layout';

function Basket(): JSX.Element {
  return (
    <Layout pageTitle="Корзина">

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

    </Layout>
  );
}

export default Basket;
