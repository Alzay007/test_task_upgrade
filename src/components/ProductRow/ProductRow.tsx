import { Product } from "../../types/ProductType";

import styles from './productRow.module.scss';

import removeIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';

interface ProductRowProps {
  product: Product;
  onDelete?: (productId: number) => void;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product, onDelete }) => {
  const getCountryList = () => {
    if (!product.Country) return "N/A";
    if (Array.isArray(product.Country)) return product.Country.join(", ");

    try {
      return JSON.parse(product.Country).join(", ");
    } catch {
      return "N/A";
    }
  };

  return (
    <tr>
      <td>
        <img src={product.Image} alt={product.Name} className={styles.productRow__image} />
      </td>
      <td>{product.Name}</td>
      <td>{product.Category}</td>
      <td>${product.ProductPrice.toFixed(2)}</td>
      <td>{getCountryList()}</td>
      <td>{product.Status}</td>
      <td>
        <div className={styles.productRow__actions}>
          <button className={styles.productRow__actionsItem} title="Edit">
            <img src={editIcon} alt="edit" />
          </button>
          <button className={styles.productRow__actionsItem} title="Delete" onClick={() => onDelete?.(product.Id)}>
            <img src={removeIcon} alt="delete" />
          </button>
        </div>
      </td>
    </tr>
  );
};

