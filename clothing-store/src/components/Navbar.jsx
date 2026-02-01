import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>Clothing Store</div>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className={styles.cart}><Link to="/cart">Cart{totalItems ? <span className={styles.badge}>{totalItems}</span> : null}</Link></li>
      </ul>
    </nav>
  );
}
