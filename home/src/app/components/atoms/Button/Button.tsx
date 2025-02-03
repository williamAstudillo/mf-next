import Image from "next/image";
import React from "react";
import styles from "./Button.module.sass";
import { Product } from "app/modules/product/domain/product";

interface ButtonProps {
  text: string;
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({ text, onClick, children }: ButtonProps) {
  // if (!isAddToCart) {
  //   return (
  //     <button className={styles.button}>
  //       <Image
  //         className={styles.button__icon}
  //         src="shopping-cart.svg"
  //         width={20}
  //         height={20}
  //         alt="Carrito de compras"
  //       />
  //       <span>{text}</span>
  //       {!isAddToCart && (
  //         <span className={styles.button__counter}>{cart.length}</span>
  //       )}
  //     </button>
  //   );
  // }

  return (
    <>
      <button className={styles.button} onClick={onClick}>
        <Image
          className={styles.button__icon}
          src="shopping-cart.svg"
          width={20}
          height={20}
          alt="Carrito de compras"
        />
        <span>{text}</span>
        {children}
      </button>
      {/* {!productFound?.quantity ? (
      ) : (
        <div className={styles.quantity_container}>
          <div className={styles.quantity_controls}>
            <button
              className={styles.quantity_controls__button}
              onClick={() => product && decreaseQuantity(product.id)}
              aria-label="Reducir cantidad"
            >
              -
            </button>
            <span className={styles.quantity_controls__quantity}>
              {productFound?.quantity}
            </span>
            <button
              className={styles.quantity_controls__button}
              onClick={() => product && addQuantity(product.id)}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
          <button
            className={styles.remove_button}
            onClick={() => product && removeFromCart(product.id)}
            aria-label="Eliminar del carrito"
          >
            <Image
              className={styles.remove_button__icon}
              src="trash.svg"
              width={20}
              height={20}
              alt="Carrito de compras"
            />
          </button>
        </div>
      )} */}
    </>
  );
}

export default Button;
