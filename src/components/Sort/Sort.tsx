import { SortType } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeSortType } from '../../store/reducers/Products/Products';
import { useState, useRef } from 'react';
import cn from 'classnames';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { getCurrentSortType } from '../../store/reducers/Products/selectors';

function Sort(): JSX.Element {
  const currentSortType = useAppSelector(getCurrentSortType);

  const [opened, setOpened] = useState(false);
  const sortRef = useRef(null);

  useOnClickOutside(sortRef, () => setOpened(false));

  const dispatch = useAppDispatch();

  return (
    <form className="sort" action="#">
      <div className="sort__wrapper">
        <span className="sort__title">Сортировка: </span>
        <button
          className="sort__type"
          onClick={(evt) => {
            evt.preventDefault();

            setOpened(!opened);
          }}
        >
          {currentSortType}
          <img src="images/catalog/arrow-down.svg" alt="Открыть список" />
        </button>
      </div>
      <ul className={cn('sort__list', opened && 'sort__list--open')} ref={sortRef} >
        {Object.values(SortType).map((type) => (
          <li
            className={cn('sort__item', { 'sort__item--active': type === currentSortType })}
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