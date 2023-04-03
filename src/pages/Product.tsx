import Layout from '../components/Layout/Layout';

function Product(): JSX.Element {
  return (
    <Layout>

      <main className="main">

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

    </Layout>
  )
}

export default Product;
