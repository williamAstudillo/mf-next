"use client";
import React, { useState } from "react";
import ProductsGrid from "app/components/organisms/ProductsGrid/ProductsGrid";
import styles from "./HomeScreen.module.sass";
import Navbar from "../organisms/Navbar/Navbar";
import useGetProducts from "app/hooks/useGetProducts";

function HomeScreen() {
  const products = useGetProducts();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar handleSearchChange={handleSearchChange} />
      <div className={styles.home}>
        <h1 className={styles.home__title}>Productos Destacados</h1>
        <ProductsGrid products={filteredProducts} />
      </div>
    </>
  );
}

export default HomeScreen;
