import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { useUserStore } from './useUserStore'
import type { CartState } from '../types'

const getUserId = () => useUserStore.getState().user?.id ?? null

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  setItems: (items) => set({ items }),

  fetchCart: async (userId) => {
    const { data } = await supabase
      .from('cart_items')
      .select('name, image, price, quantity')
      .eq('user_id', userId)

    if (data) {
      set({ items: data })
    }
  },

  addItem: async (item) => {
    const userId = getUserId()
    const existing = get().items.find((i) => i.name === item.name)

    if (existing) {
      const newQuantity = existing.quantity + item.quantity
      set({
        items: get().items.map((i) =>
          i.name === item.name ? { ...i, quantity: newQuantity } : i
        ),
      })
      if (userId) {
        await supabase
          .from('cart_items')
          .update({ quantity: newQuantity })
          .eq('user_id', userId)
          .eq('name', item.name)
      }
    } else {
      set({ items: [...get().items, item] })
      if (userId) {
        await supabase
          .from('cart_items')
          .insert({ user_id: userId, ...item })
      }
    }
  },

  removeItem: async (name) => {
    const userId = getUserId()
    set({ items: get().items.filter((i) => i.name !== name) })
    if (userId) {
      await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
        .eq('name', name)
    }
  },

  updateQuantity: async (name, quantity) => {
    const userId = getUserId()
    set({
      items: get().items.map((i) =>
        i.name === name ? { ...i, quantity } : i
      ),
    })
    if (userId) {
      await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', userId)
        .eq('name', name)
    }
  },

  clearCart: () => set({ items: [] }),
}))
