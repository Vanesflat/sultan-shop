import { useState, useEffect } from 'react';
import Categories from '../Categories/Categories';
import cn from 'classnames';
import { useResize } from '../../hooks/useResize';
import { useAppDispatch } from '../../hooks/store';
import { resetFilters } from '../../store/reducers/Products/Products';
import FilterByProducers from '../FilterByProducers/FilterByProducers';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

function Filters(): JSX.Element {
  const [visible, setVisible] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const screenWidth = useResize();

  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    setIsReset(true);
    dispatch(resetFilters());
  }

  useEffect(() => {
    if (screenWidth.isScreenDesktop) {
      setVisible(true);
    }
  }, [screenWidth.isScreenDesktop]);

  useEffect(() => {
    if (isReset) {
      setIsReset(false);
    }
  }, [isReset]);

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
          <FilterByPrice isReset={isReset} />
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