import { SortType } from '../../enums';

function Sort(): JSX.Element {
  return (
    <div className="sort">
      <span className="sort__title">Сортировка:</span>
      <select className="sort__list" value="">
        {Object.entries(SortType).map(([value, sortType]) => (
          <option
            value={value}
            className="sort__item"
            key={value}
          >
            {sortType}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;