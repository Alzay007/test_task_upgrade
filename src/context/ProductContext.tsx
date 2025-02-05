import { createContext } from 'react';
import { Product } from '../types/ProductType';

interface ProductContextType {
  products: Product[];
  totalPages: number;
  totalItemsCount: number;
  currentPage: number;
  itemsPerPage: number;
  loading: boolean;
  error: string | null;
  query: string;
  setQuery: (query: string) => void;
  setCurrentPage: (number: number) => void;
  setItemsPerPage: (number: number) => void;
  fetchProducts: () => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);
