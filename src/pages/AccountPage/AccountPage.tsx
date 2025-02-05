import image from '../../assets/images/coming.png';
import styles from './AccountPage.module.scss';

export const AccountPage = () => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image}></img>
    </div>
  );
};
