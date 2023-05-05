import ReactPaginate from 'react-paginate';

type PaginationProps = {
  pageCount: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({ pageCount, onChange }: PaginationProps): JSX.Element {
  return (
    <ReactPaginate
      className='catalog__pagination pagination'
      previousLabel={
        <button className="pagination__btn pagination__btn--prev">
          <img src="images/catalog/arrow-prev.svg" alt="Предыдущая страница" />
        </button>}
      nextLabel={
        <button className="pagination__btn pagination__btn--next">
          <img src="images/catalog/arrow-next.svg" alt="Следующая страница" />
        </button>}
      previousClassName='pagination__btn pagination__btn--prev'
      nextClassName='pagination__btn pagination__btn--next'
      pageClassName='pagination__item'
      activeClassName='pagination__item--active'
      onPageChange={(event) => onChange(event.selected + 1)}
      pageCount={pageCount}
    />
  );
}

export default Pagination;