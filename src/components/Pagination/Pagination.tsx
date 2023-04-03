function Pagination(): JSX.Element {
  return (
    <div className="catalog__pagination pagination">
      <button className="pagination__btn pagination__btn--prev">
        <img src="images/catalog/arrow-prev.svg" alt="Предыдущая страница" />
      </button>

      <ul className="pagination__list">
        <li className="pagination__item pagination__item--active"><a className="pagination__link" href="/#">1</a></li>
        <li className="pagination__item"><a className="pagination__link" href="/#">2</a></li>
        <li className="pagination__item"><a className="pagination__link" href="/#">3</a></li>
        <li className="pagination__item"><a className="pagination__link" href="/#">4</a></li>
        <li className="pagination__item"><a className="pagination__link" href="/#">5</a></li>
      </ul>

      <button className="pagination__btn pagination__btn--next">
        <img src="images/catalog/arrow-next.svg" alt="Следующая страница" />
      </button>
    </div>
  );
}

export default Pagination;