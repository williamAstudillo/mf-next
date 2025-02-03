"use client";
import { getProducts } from "app/modules/product/aplication/get-product/getProduct";
import { Product } from "app/modules/product/domain/product";
import { getProductsRepository } from "app/modules/product/infraestructure/getProductsRepository";
import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getProducts(getProductsRepository());
    setProducts(products);
  };
  return products;
};

export default useGetProducts;
