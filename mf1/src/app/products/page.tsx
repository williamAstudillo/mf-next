import { getProducts } from "app/services/services";
import Link from "next/link";

async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products?.map((product: { id: string; title: string }) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <h1>{product.title}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Products;
