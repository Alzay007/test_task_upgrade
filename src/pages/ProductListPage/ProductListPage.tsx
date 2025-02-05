import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { SearchBar } from "../../components/SearchBar";
import { Loader } from "../../components/Loader";
import { ProductTable } from "../../components/ProductTable";
import { Pagination } from "../../components/Pagination";

import styles from "./productList.module.scss";

export const ProductListPage: React.FC = () => {
  const { products, loading, fetchProducts } = useContext(ProductContext)!;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.productList}>
      <h1 className={styles.productList__title}>Product List</h1>
      <p className={styles.productList__description}>
        Review and manage the products available on the marketplace.
      </p>

      <SearchBar />

      {loading ? (
        <Loader />
      ) : (
        <>
          <ProductTable products={products} />
          <Pagination />

          <button className={styles.productList__submitBtn}>
            <span>Submit</span>
          </button>
        </>
      )}
    </div>
  );
};
