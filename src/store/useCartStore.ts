import { create } from 'zustand'
import type { CartState } from '../types'

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }
      return { items: [...state.items, item] }
    }),
  removeItem: (name) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== name),
    })),
  updateQuantity: (name, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.name === name ? { ...i, quantity } : i
      ),
    })),
  clearCart: () => set({ items: [] }),
}))
