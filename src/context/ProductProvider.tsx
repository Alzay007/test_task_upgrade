import { useState, ReactNode, useCallback, useMemo } from 'react';
import { Product } from '../types/ProductType';
import { ProductContext } from './ProductContext';

const BASE_URL = "https://mammoth-testing-api.webinone.com/items";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;

    return products.filter(product =>
      product.Name.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      query: '',
      limit: itemsPerPage.toString(),
      page: currentPage.toString(),
      prop_ModuleId: "2053",
    });

    try {
      const response = await fetch(`${BASE_URL}?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.Items || []);
      setTotalPages(Math.ceil(data.Pagination.NumberOfPages));
      setTotalItemsCount(data.Pagination.TotalItemsCount);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }, [itemsPerPage, currentPage]);

  return (
    <ProductContext.Provider value={{
      products: filteredProducts,
      totalPages,
      totalItemsCount,
      currentPage,
      setCurrentPage,
      itemsPerPage,
      setItemsPerPage,
      loading,
      error,
      query,
      setQuery,
      fetchProducts
    }}
    >
      {children}
    </ProductContext.Provider>
  );
};
