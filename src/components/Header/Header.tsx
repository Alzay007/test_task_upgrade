import { Link } from 'react-router-dom';
import styles from "./header.module.scss";

import account from "../../assets/icons/account.svg";
import logout from "../../assets/icons/logout.svg";

interface HeaderProps {
  email: string;
}

export const Header: React.FC<HeaderProps> = ({ email }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <span>Company&nbsp;</span>
          LOGO
        </Link>
      </div>
      <div className={styles.header__actions}>
        <div className={styles.header__profile}>
          <img src={account} alt="Account Icon" className={styles.header__profileIcon} />
          <span className={styles.header__profileEmail}>{email}</span>
        </div>
        <button className={styles.header__logout}>
          <img src={logout} alt="Logout Icon" className={styles.header__logoutIcon} />
          <span className={styles.header__logoutText}>Sign Out</span>
        </button>
      </div>
    </header>
  );
};
