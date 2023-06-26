import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { Category } from '../../enums';
import { useAppSelector } from '../../hooks/store';
import { changeCategory } from '../../store/reducers/Products/Products';
import { getCurrentCategory } from '../../store/reducers/Products/selectors';

type categoriesProps = {
  classNames: string;
  isVertical?: boolean;
};

function Categories({ classNames, isVertical }: categoriesProps): JSX.Element {
  const currentCategory = useAppSelector(getCurrentCategory);
  
  const dispatch = useDispatch();

  return (
    <div className={cn(`${classNames}__tabs tabs`, isVertical && 'tabs--vertical')}>
      <ul className="tabs__list">
        {Object.entries(Category).map(([categoryItem, text]) => (
          <li
            className={cn('tabs__item', { 'tabs__item--active': currentCategory === categoryItem })}
            key={categoryItem}
            onClick={() => {
              if (categoryItem === currentCategory) {
                dispatch(changeCategory(''));

                return;
              }

              dispatch(changeCategory(categoryItem));
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;