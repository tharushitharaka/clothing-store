import React from 'react';
import styles from './Cart.module.css';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, updateQty, removeItem, totalPrice, clear } = useCart();

  if (!cart.length) return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <div className={styles.list}>
        {cart.map(item => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.name} />
            <div className={styles.info}>
              <h3>{item.name}</h3>
              <div className={styles.controls}>
                <label>
                  Qty:
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={e => updateQty(item.id, Number(e.target.value))}
                  />
                </label>
                <div className={styles.price}>${(item.price * item.qty).toFixed(2)}</div>
                <button className={styles.remove} onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div><strong>Total:</strong> ${totalPrice.toFixed(2)}</div>
        <div className={styles.actions}>
          <button className={styles.clear} onClick={clear}>Clear Cart</button>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
