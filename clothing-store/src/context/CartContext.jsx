import React, { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'initialize':
      return action.payload || [];
    case 'add': {
      const found = state.find(i => i.id === action.payload.id);
      if (found) {
        return state.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
    case 'remove':
      return state.filter(i => i.id !== action.payload);
    case 'updateQty':
      return state.map(i => i.id === action.payload.id ? { ...i, qty: Math.max(1, action.payload.qty) } : i);
    case 'clear':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      if (raw) dispatch({ type: 'initialize', payload: JSON.parse(raw) });
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  const addItem = (product) => dispatch({ type: 'add', payload: product });
  const removeItem = (id) => dispatch({ type: 'remove', payload: id });
  const updateQty = (id, qty) => dispatch({ type: 'updateQty', payload: { id, qty } });
  const clear = () => dispatch({ type: 'clear' });

  const totalItems = cart.reduce((s, i) => s + (i.qty || 0), 0);
  const totalPrice = cart.reduce((s, i) => s + (i.qty || 0) * (i.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clear, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
