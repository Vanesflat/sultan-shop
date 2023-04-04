import { useState } from 'react';
import { Product } from '../../types/product';
import Tabs from '../Tabs/Tabs';

type FiltersProps = {
  products?: Product[];
};

type Producer = {
  [producer: string]: number;
}

function Filters({ products }: FiltersProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const producers = products?.reduce((acc: Producer, product) => {
    const producer = product.producer;

    if (!acc[producer]) {
      acc[producer] = 1;
    } else {
      acc[producer]++;
    }

    return acc;
  }, {});

  return (
    <div className="filters">

      <div className="filters__title">
        <p>ПОДБОР ПО ПАРАМЕТРАМ</p>
        <button className="filters__btn">
          <img src="images/catalog/filter-arrow.svg" alt="Раскрыть список" />
        </button>
      </div>

      <div className="filters__price">
        <p>Цена <span>₸</span></p>
        <input type="number" value="0" />
        <span>-</span>
        <input type="number" value="10000" />
      </div>

      <div className="filters__producer">
        <p>Производитель</p>
        <form className="form form--search" action="/">
          <input className="form__input" type="text" placeholder="Поиск..." />
          <button className="form__btn" type="submit">
            <img src="images/header/search.svg" alt="Найти" />
          </button>
          <fieldset className="form__producers">
            {Object.entries(producers ? producers : '').map(([producer, count], i) => {

              if (!visible && i >= 4) {
                return '';
              }

              return (
                <div className="form__group" key={i}>
                  <input className="form__checkbox" type="checkbox" id={`producer-${i}`} />
                  <label htmlFor={`producer-${i}`}> {producer} <span className="form__count">({count})</span></label>
                </div>
              )
            })}
          </fieldset>
          <button
            className="form__btn-show"
            type="button"
            onClick={() => setVisible(!visible)}
          >
            Показать все
          </button>
        </form>
      </div>

      <div className="filters__controls">
        <button className="btn">Показать</button>
        <button className="btn btn--small">
          <img src="images/catalog/trash.svg" alt="Удалить" />
        </button>
      </div>

      <Tabs classNames="filters" isVertical={true} />

    </div>
  );
}

export default Filters;