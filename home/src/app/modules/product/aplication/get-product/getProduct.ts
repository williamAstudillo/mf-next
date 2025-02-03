import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/productRepository";

export async function getProduct(
  productRepository: ProductRepository,
  productId: number
): Promise<Product> {
  return productRepository.getProduct(productId);
}

export async function getProducts(
  productRepository: ProductRepository
): Promise<Product[]> {
  return productRepository.getProducts();
}
