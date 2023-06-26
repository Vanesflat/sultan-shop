import { useMemo, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeProducer } from '../../store/reducers/Products/Products';
import { getCurrentProducers, getProducts } from '../../store/reducers/Products/selectors';
import { getProducers } from '../../utils/common';

function FilterByProducers(): JSX.Element {
  const products = useAppSelector(getProducts);

  const [visibleProducers, setVisibleProducers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const producers = getProducers(products);
  const searchedProducers = useMemo(() => {
    return Object.entries(producers).filter(([producer, _]) => producer.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, producers]);

  const currentProducers = useAppSelector(getCurrentProducers);

  const dispatch = useAppDispatch();

  const handleProducerChange = (producer: string) => {
    dispatch(changeProducer(producer));
  };

  return (
    <div className="filters__producer">
      <p>Производитель</p>
      <form className="form form--search" action="/" onSubmit={(evt) => { evt.preventDefault(); }}>
        <input
          className="form__input"
          type="text"
          placeholder="Поиск..."
          onChange={(evt) => {
            setSearchQuery(evt.target.value);
          }}
        />
        <button className="form__btn" type="submit">
          <img src="images/header/search.svg" alt="Найти" />
        </button>
        <fieldset className="form__producers">
          {searchedProducers.map((producer, i) => {
            const [name, count] = producer;

            if (!visibleProducers && i >= 4) {
              return '';
            }

            return (
              <div className="form__group" key={i}>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id={`producer-${i}`}
                  checked={currentProducers.includes(name)}
                  onChange={() => handleProducerChange(name)}
                />
                <label htmlFor={`producer-${i}`}> {name} <span className="form__count">({count})</span></label>
              </div>
            )
          })}
        </fieldset>
        <button
          className={cn('form__btn-show', visibleProducers && 'form__btn-show--active')}
          type="button"
          onClick={() => setVisibleProducers(!visibleProducers)}
        >
          Показать все
        </button>
      </form>
    </div>
  );
}

export default FilterByProducers;