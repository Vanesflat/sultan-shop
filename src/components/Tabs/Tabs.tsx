import cn from 'classnames';
import { Categories } from '../../enums';

type TabsProps = {
  classNames: string,
  isVertical?: boolean,
};

function Tabs({ classNames, isVertical }: TabsProps): JSX.Element {
  return (
    <div className={cn(`${classNames}__tabs tabs`, isVertical && 'tabs--vertical')}>
      <ul className="tabs__list">
        {Object.entries(Categories).map(([category, text]) => (
          <li
            className="tabs__item"
            data-category={category}
            key={category}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;