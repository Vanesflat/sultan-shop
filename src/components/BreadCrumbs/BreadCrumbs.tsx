function BreadCrumbs(): JSX.Element {
  return (
    <section className="bread-crumbs">
      <div className="container">

        <ul className="bread-crumbs__list">

          <li className="bread-crumbs__item">
            <a className="bread-crumbs__link" href="/#">Главная</a>
          </li>

          <li className="bread-crumbs__item">
            <a className="bread-crumbs__link bread-crumbs__link--active" href="/#">Косметика и гигиена</a>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default BreadCrumbs;