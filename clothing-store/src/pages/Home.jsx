import React from 'react';
import styles from './Home.module.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to Clothing Store</h1>
        <p>Quality apparel for every day.</p>
      </section>

      <section className={styles.featured}>
        <h2>Featured</h2>
        <div className={styles.grid}>
          {products.slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
