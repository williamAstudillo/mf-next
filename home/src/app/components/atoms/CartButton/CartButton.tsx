import React from "react";
import Image from "next/image";
import styles from "./CartButton.module.sass";
import Button from "../Button/Button";
import { Product } from "app/modules/product/domain/product";

interface CartButtonProps {
  quantity: number;
  product: Product;
  decreaseQuantity: (id: number) => void;
  addQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  addToCart: (product: Product) => void;
}

const CartButton: React.FC<CartButtonProps> = ({
  quantity,
  product,
  decreaseQuantity,
  addQuantity,
  removeFromCart,
  addToCart,
}) => {
  if (!quantity) {
    return (
      <Button text="Agregar al carrito" onClick={() => addToCart(product)} />
    );
  }

  return (
    <div className={styles.quantity_container}>
      <div className={styles.quantity_controls}>
        <button
          className={styles.quantity_controls__button}
          onClick={() => decreaseQuantity(product.id)}
          aria-label="Reducir cantidad"
        >
          -
        </button>
        <span className={styles.quantity_controls__quantity}>{quantity}</span>
        <button
          className={styles.quantity_controls__button}
          onClick={() => addQuantity(product.id)}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
      <button
        className={styles.remove_button}
        onClick={() => removeFromCart(product.id)}
        aria-label="Eliminar del carrito"
      >
        <Image
          className={styles.remove_button__icon}
          src="trash.svg"
          width={20}
          height={20}
          alt="Eliminar del carrito"
        />
      </button>
    </div>
  );
};

export default CartButton;
