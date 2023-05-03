import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { Category } from '../../enums';
import { changeCategory } from '../../store/reducers/Products/Products';

type categoriesProps = {
  classNames: string;
  isVertical?: boolean;
  currentCategory: Category | null;
};

function Categories({ classNames, isVertical, currentCategory }: categoriesProps): JSX.Element {
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