import { Link } from 'react-router-dom';
import styles from './sideBar.module.scss';

export const SideBar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <Link to="/">Product List</Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link to="/account">My account</Link>
        </li>
      </ul>
    </nav>
  );
};
