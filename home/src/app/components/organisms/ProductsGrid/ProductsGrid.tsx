import React from "react";
//TODO refactor imports
import Card from "app/components/molecules/Card/Card";
import styles from "./ProductsGrid.module.sass";
import { Product } from "app/modules/product/domain/product";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <main className={styles.grid_container}>
      {products &&
        products?.map((product) => <Card key={product.id} product={product} />)}
    </main>
  );
}

export default ProductsGrid;
