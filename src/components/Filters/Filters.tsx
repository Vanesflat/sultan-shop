import { useState, useEffect } from 'react';
import Categories from '../Categories/Categories';
import cn from 'classnames';
import { useResize } from '../../hooks/useResize';
import { useAppDispatch } from '../../hooks/store';
import { resetFilters } from '../../store/reducers/Products/Products';
import FilterByProducers from '../FilterByProducers/FilterByProducers';

function Filters(): JSX.Element {
  const [visible, setVisible] = useState(true);
  const screenWidth = useResize();

  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    dispatch(resetFilters());
  }

  useEffect(() => {
    if (screenWidth.isScreenDesktop) {
      setVisible(true);
    }
  }, [screenWidth.isScreenDesktop])

  return (
    <div className="filters">

      <div className="filters__title">
        <p>ПОДБОР ПО ПАРАМЕТРАМ</p>
        <button
          className={cn('filters__btn', visible && 'filters__btn--active')}
          onClick={() => setVisible(!visible)}
        >
          <img src="images/catalog/filter-arrow.svg" alt="Раскрыть список" />
        </button>
      </div>

      {visible && (
        <>
          <div className="filters__price">
            <p>Цена <span>₸</span></p>
            <input type="number" placeholder="0" />
            <span>-</span>
            <input type="number" placeholder="10000" />
          </div>

          <FilterByProducers />

          <div className="filters__controls">
            <button className="btn" type="submit">Показать</button>
            <button
              className="btn btn--small"
              type="reset"
              onClick={handleResetClick}
            >
              <img src="images/catalog/trash.svg" alt="Удалить" />
            </button>
          </div>
        </>
      )}

      <Categories classNames="filters" isVertical />

    </div>
  );
}

export default Filters;