"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.sass";
import Image from "next/image";
import Button from "app/components/atoms/Button";

interface NavbarProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Navbar({ handleSearchChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <Image
            className={styles.navbar__brand__icon}
            src="shopping-cart-red.svg"
            width={20}
            height={20}
            alt="Carrito de compras"
          />
          <span className={styles.navbar__brand_name}>TestTienda</span>
        </div>
        {/* TODO */}
        {/* <button
          className={styles.navbar__mobile_menu_button}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        <div
          className={`${styles.navbar__content} ${
            isMenuOpen ? styles.navbar__content_show : ""
          }`}
        >
          <div
            className={`${styles.navbar__search} ${
              isSearchFocused ? styles.navbar__search_focused : ""
            }`}
          >
            <Image
              className={styles.navbar__search__icon}
              src="search.svg"
              width={20}
              height={20}
              alt="Buscador"
            />
            <input
              type="text"
              className={styles.navbar__search_input}
              placeholder="Buscar productos..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className={styles.navbar__actions}>
          <button className={styles.navbar__button}>
            <Image
              className={styles.navbar__button__icon}
              src="heart.svg"
              width={20}
              height={20}
              alt="Favoritos"
            />
            <span>Favoritos</span>
          </button>
          <button className={styles.navbar__button}>
            <Image
              className={styles.navbar__button__icon}
              src="profile.svg"
              width={20}
              height={20}
              alt="Perfil"
            />
            <span>Mi Cuenta</span>
          </button>
          <div className={styles.navbar__button_cart}>
            <Button text="Carrito" isAddToCart={false} />
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className={styles.navbar__overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
