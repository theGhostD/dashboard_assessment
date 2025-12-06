"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product, ProductContextType } from "@/services/utils/interfaces";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {

  
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      const modifyProduct = data?.products.map((product: Product) => ({
        ...product,
        status: Math.random() < 0.4 ? "In Stock" : "Out of Stock",
      }));
      return modifyProduct;
    },
  });

  const value: ProductContextType = {
    products: data ?? [],
    isLoading,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
