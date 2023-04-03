function BasketBtn(): JSX.Element {
  return (
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
  );
}

export default BasketBtn;