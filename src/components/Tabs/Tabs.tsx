import cn from 'classnames';

type TabsProps = {
  classNames: string,
  isVertical?: boolean,
};

function Tabs({ classNames, isVertical }: TabsProps): JSX.Element {
  return (
    <div className={cn(`${classNames}__tabs tabs`, isVertical && 'tabs--vertical')}>
      <ul className="tabs__list">
        <li className="tabs__item">Уход за телом</li>
        <li className="tabs__item">Уход за руками</li>
        <li className="tabs__item">Уход за ногами</li>
        <li className="tabs__item">Уход за лицом</li>
        <li className="tabs__item">Уход за волосами</li>
        <li className="tabs__item">Средства для загара</li>
        <li className="tabs__item">Средства для бритья</li>
        <li className="tabs__item">Подарочные наборы</li>
        <li className="tabs__item">Гигиеническая продукция</li>
        <li className="tabs__item">Гигиена полости рта</li>
        <li className="tabs__item">Бумажная продукция</li>
      </ul>
    </div>
  );
}

export default Tabs;