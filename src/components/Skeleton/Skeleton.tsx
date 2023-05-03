import ContentLoader from 'react-content-loader';
import classes from './Skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={326}
    height={490}
    viewBox="0 0 326 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={classes.card}
  >
    <rect x="21" y="21" rx="7" ry="7" width="284" height="190" />
    <rect x="20" y="240" rx="7" ry="7" width="284" height="50" />
    <rect x="21" y="310" rx="7" ry="7" width="284" height="73" />
    <rect x="21" y="433" rx="0" ry="0" width="40" height="24" />
    <rect x="152" y="424" rx="22" ry="22" width="153" height="43" />
  </ContentLoader>
)

export default Skeleton;
