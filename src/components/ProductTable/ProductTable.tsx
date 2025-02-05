import { ProductRow } from "../ProductRow";
import { Product } from "../../types/ProductType";

import styles from "./productTable.module.scss";


interface ProductTableProps {
  products: Product[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className={styles.productTable}>
      <table className={styles.productTable__table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Country</th>
            <th>Marketplace Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductRow key={product.Id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan={7} className={styles.productTable__empty}>
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
