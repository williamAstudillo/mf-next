import { Product } from "./product";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product>;
}
