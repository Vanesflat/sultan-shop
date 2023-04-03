import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import Sort from '../components/Sort/Sort';
import Tabs from '../components/Tabs/Tabs';

function Catalog(): JSX.Element {
  return (
    <Layout pageTitle="Каталог">

      <main className="main">

        <section className="catalog">
          <div className="container">
            <h2 className="catalog__title title">Косметика и гигиена</h2>

            <Tabs classNames="catalog" />

            <div className="catalog__wrapper">

              <div className="catalog__filters filters">

                <div className="filters__title">
                  <p>ПОДБОР ПО ПАРАМЕТРАМ</p>
                  <button className="filters__btn">
                    <img src="images/catalog/filter-arrow.svg" alt="Раскрыть список" />
                  </button>
                </div>

                <div className="filters__price">
                  <p>Цена <span>₸</span></p>
                  <input type="number" value="0" />
                  <span>-</span>
                  <input type="number" value="10000" />
                </div>

                <div className="filters__producer">
                  <p>Производитель</p>
                  <form className="form form--search" action="/">
                    <input className="form__input" type="text" placeholder="Поиск..." />
                    <button className="form__btn" type="submit">
                      <img src="images/header/search.svg" alt="Найти" />
                    </button>
                    <fieldset className="form__producers">
                      <div className="form__group">
                        <input className="form__checkbox" type="checkbox" id="producer-1" />
                        <label htmlFor="producer-1">Grifon <span className="form__count">(56)</span></label>
                      </div>
                      <div className="form__group">
                        <input className="form__checkbox" type="checkbox" id="producer-2" />
                        <label htmlFor="producer-2">Boyscout <span className="form__count">(56)</span></label>
                      </div>
                      <div className="form__group">
                        <input className="form__checkbox" type="checkbox" id="producer-3" />
                        <label htmlFor="producer-3">Paclan <span className="form__count">(56)</span></label>
                      </div>
                      <div className="form__group">
                        <input className="form__checkbox" type="checkbox" id="producer-4" />
                        <label htmlFor="producer-4">Булгари Грин <span className="form__count">(56)</span></label>
                      </div>
                    </fieldset>
                    <button className="form__btn-show" type="button">Показать все</button>
                  </form>
                </div>

                <div className="filters__controls">
                  <button className="btn">Показать</button>
                  <button className="btn btn--small">
                    <img src="images/catalog/trash.svg" alt="Удалить" />
                  </button>
                </div>

                <Tabs classNames="filters" isVertical={true} />

              </div>

              <div className="catalog__content">

                <Sort />

                <div className="catalog__product-list product__list">

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
                      <p className="product__capacity capacity capacity--box">1500 г</p>
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

                <Pagination />

                <p className="catalog__info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut
                  justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                  Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
                  dignissim sed nulla ullamcorper enim, malesuada.
                </p>
              </div>
            </div>

          </div>

        </section>

      </main>

    </Layout>
  );
}

export default Catalog;
