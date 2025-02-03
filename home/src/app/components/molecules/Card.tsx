import React from "react";
import Button from "app/components/atoms/Button";
import Image from "next/image";
import styles from "./Card.module.sass";
import { Product } from "app/modules/product/domain/product";
import { SanitizeHTML } from "app/shared/sanitizeHtml/sanitizeHTML";

function Card({ product }: { product: Product }) {
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
          <Button text="Añadir al Carrito" isAddToCart product={product} />
        </div>
      </section>
    </article>
  );
}

export default Card;
