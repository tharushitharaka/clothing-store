import React from 'react';
import styles from './Shop.module.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <div className={styles.grid}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
