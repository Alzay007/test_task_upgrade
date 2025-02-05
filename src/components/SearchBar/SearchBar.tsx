import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import styles from "./searchBar.module.scss";

import searchIcon from "../../assets/icons/search.svg";

export const SearchBar = () => {
  const { setQuery } = useContext(ProductContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchBar__input}
        onChange={handleChange}
      />
      <button className={styles.searchBar__button}>
        <img src={searchIcon} alt="Search" className={styles.searchBar__icon} />
      </button>
    </div>
  );
};
