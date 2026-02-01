import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
        <button className={styles.button} onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}
