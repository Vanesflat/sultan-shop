import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getCurrentMaxPrice, getCurrentMinPrice, getFilteredProducts } from '../../store/reducers/Products/selectors';
import { getPrice } from '../../utils/filter';
import { useState, useEffect, ChangeEvent } from 'react';
import { setMaxPrice, setMinPrice } from '../../store/reducers/Products/Products';

type FilterByPriceProps = {
  isReset: boolean;
};

function FilterByPrice({ isReset }: FilterByPriceProps): JSX.Element {
  const products = useAppSelector(getFilteredProducts);
  const currentMinPrice = useAppSelector(getCurrentMinPrice);
  const currentMaxPrice = useAppSelector(getCurrentMaxPrice);

  const [minPriceValue, setMinPriceValue] = useState(0 || currentMinPrice);
  const [maxPriceValue, setMaxPriceValue] = useState(0 || currentMaxPrice);

  const minPrice = getPrice(products, 'min');
  const maxPrice = getPrice(products, 'max');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isReset) {
      setMinPriceValue(0);
      setMaxPriceValue(0);
    }
  }, [isReset]);

  const handleMinPriceInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setMinPriceValue(+value);
  };

  const handleMaxPriceInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setMaxPriceValue(+value);
  };

  const handleMinPriceBlur = () => {
    if (!minPriceValue) {
      setMinPriceValue(0);
      dispatch(setMinPrice(0));

      return;
    }

    if (minPriceValue < +minPrice) {
      setMinPriceValue(+minPrice);
      dispatch(setMinPrice(+minPrice));

      return;
    }

    if (minPriceValue > +maxPrice) {
      setMinPriceValue(+maxPrice);
      dispatch(setMinPrice(+maxPrice));

      return;
    }

    dispatch(setMinPrice(minPriceValue));
  };

  const handleMaxPriceBlur = () => {
    if (!maxPriceValue) {
      setMaxPriceValue(0);
      dispatch(setMaxPrice(0));

      return;
    }

    if (maxPriceValue > +maxPrice) {
      setMaxPriceValue(+maxPrice);
      dispatch(setMaxPrice(+maxPrice));

      return;
    }

    if (maxPriceValue < minPriceValue) {
      setMaxPriceValue(minPriceValue);
      dispatch(setMaxPrice(minPriceValue));

      return;
    }

    dispatch(setMaxPrice(maxPriceValue));
  };

  return (
    <div className="filters__price">
      <p>Цена <span>₸</span></p>
      <input
        type="number"
        placeholder={minPrice}
        onChange={handleMinPriceInputChange}
        onBlur={handleMinPriceBlur}
        value={minPriceValue || ''}
      />
      <span> - </span>
      <input
        type="number"
        placeholder={maxPrice}
        onChange={handleMaxPriceInputChange}
        onBlur={handleMaxPriceBlur}
        value={maxPriceValue || ''}
      />
    </div>
  );
}

export default FilterByPrice;
