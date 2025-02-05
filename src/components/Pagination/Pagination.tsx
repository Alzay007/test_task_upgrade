import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "./pagination.module.scss";

import Arrow from "../../assets/icons/back-arrow.svg";

export const Pagination: React.FC = () => {
  const {
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    totalItemsCount
  } = useContext(ProductContext)!;

  const handlePageClick = (page: number) => {
    if (page > 0 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    if (newItemsPerPage !== itemsPerPage) {
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage);

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__info}>
        Items per page:{" "}
        <select
          className={styles.pagination__select}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className={styles.pagination__status}>
        Showing {startItem}-{endItem} of {totalItemsCount} items
      </div>
      <div className={styles.pagination__controls}>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.pagination__button} ${styles.pagination__buttonPrev} ${currentPage === 1 ? styles.disabled : ''}`}
        >
          <img src={Arrow} alt="previous" />
        </button>
        <span className={styles.pagination__current}>{currentPage}</span>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.pagination__button} ${currentPage === totalPages ? styles.disabled : ''}`}
        >
          <img src={Arrow} alt="next" />
        </button>
      </div>
    </div>
  );
};
