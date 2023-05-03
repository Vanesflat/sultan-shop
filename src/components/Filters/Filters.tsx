import { useMemo, useState } from 'react';
import { Product } from '../../types/product';
import Categories from '../Categories/Categories';
import cn from 'classnames';
import { Category } from '../../enums';

type FiltersProps = {
  products: Product[];
  currentCategory: Category | null;
};

type Producer = {
  [producer: string]: number;
}

const getProducers = (products: Product[]) =>
  products.reduce((acc: Producer, product) => {
    const producer = product.producer;

    if (!acc[producer]) {
      acc[producer] = 1;
    } else {
      acc[producer]++;
    }

    return acc;
  }, {});

function Filters({ products, currentCategory }: FiltersProps): JSX.Element {
  const [visible, setVisible] = useState(true);
  const [visibleProducers, setVisibleProducers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const producers = getProducers(products);
  const searchedProducers = useMemo(() => {
    return Object.entries(producers).filter(([producer, _]) => producer.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, producers]);

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

          <div className="filters__producer">
            <p>Производитель</p>
            <form className="form form--search" action="/">
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
                      <input className="form__checkbox" type="checkbox" id={`producer-${i}`} />
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

              <div className="filters__controls">
                <button className="btn" type="submit">Показать</button>
                <button className="btn btn--small" type="reset">
                  <img src="images/catalog/trash.svg" alt="Удалить" />
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <Categories classNames="filters" isVertical={true} currentCategory={currentCategory} />

    </div>
  );
}

export default Filters;