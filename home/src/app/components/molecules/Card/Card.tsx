import React from "react";
import Image from "next/image";
import styles from "./Card.module.sass";
import { Product } from "app/modules/product/domain/product";
import { SanitizeHTML } from "app/shared/sanitizeHtml/sanitizeHTML";
import CartButton from "app/components/atoms/CartButton/CartButton";
import useStore from "app/store/useStore";

function Card({ product }: { product: Product }) {
  const { cart, addToCart, decreaseQuantity, addQuantity, removeFromCart } =
    useStore();
  const productFoundQuantity = cart.find(
    (productCart) => productCart?.id === product?.id
  );
  return (
    <article className={styles.card}>
      <section className={styles.card__product}>
        <Image
          src={product.image}
          alt="Nike Sport Shoes"
          width={300}
          height={300}
          className={styles.card__image}
        />
        <div className={styles.card__info}>
          <div className={styles.card__category}>{product.category}</div>
          <h2 className={styles.card__name}>{product.name}</h2>
          <span className={styles.card__stock_label}>En Stock</span>
          <p className={styles.card__description}>
            <SanitizeHTML tag="div">{product.description}</SanitizeHTML>
          </p>
          <div className={styles.card__price_row}>
            <div>
              <span className={styles.card__price}>{product.price}</span>
              <span className={styles.card__original_price}>
                {product.promotionPrice}
              </span>
            </div>
          </div>
          <CartButton
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
            product={product}
            quantity={productFoundQuantity?.quantity || 0}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        </div>
      </section>
    </article>
  );
}

export default Card;
