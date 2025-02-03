import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";
import { axiosInstance } from "./axiosInstance";
import { ApiResponse } from "./interfaces/productsApi";

export function getProductsRepository(): ProductRepository {
  return {
    getProducts,
    getProduct,
  };
}

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<ApiResponse>("");
  const formatResponse = response.data.products.map((product) => {
    return {
      id: product.id,
      name: product.title,
      price: Number(product.variants[0].price),
      description: product.body_html,
      image: product.image.src,
      category: product.tags,
      status: product.status,
      promotionPrice: Number(product.variants[0].compare_at_price),
    };
  });
  return formatResponse;
};

const getProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`http://localhost:3001/products/${id}`);
  return response.json();
};
