import { SortType } from '../../enums';
import { useAppDispatch } from '../../hooks/store';
import { changeSortType } from '../../store/reducers/ProductSlice';
import { useState } from 'react';
import cn from 'classnames';

type SortProps = {
  sortType: SortType;
};

function Sort({ sortType }: SortProps): JSX.Element {
  const [opened, setOpened] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <form className="sort" action="#">
      <div className="sort__wrapper">
        <span className="sort__title">Сортировка: </span>
        <button
          className="sort__type"
          onClick={() => setOpened(!opened)}
        >
          {sortType}
          <img src="images/catalog/arrow-down.svg" alt="Открыть список" />
        </button>
      </div>
      <ul className={cn('sort__list', opened && 'sort__list--open')}>
        {Object.values(SortType).map((type) => (
          <li
            className={cn('sort__item', { 'sort__item--active': type === sortType })}
            key={type}
            onClick={(evt) => {
              evt.preventDefault();

              dispatch(changeSortType(type))
              setOpened(false);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </form >
  );
}

export default Sort;