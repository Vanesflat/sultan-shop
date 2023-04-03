function Sort(): JSX.Element {
  return (
    <div className="sort">
      <span className="sort__title">Сортировка:</span>
      <select className="sort__list">
        <option value="name" className="sort__item" selected>Название</option>
        <option value="price" className="sort__item">Цена</option>
        <option value="low" className="sort__item">Сначала дешевые</option>
        <option value="high" className="sort__item">Сначала дорогие</option>
      </select>
    </div>
  );
}

export default Sort;