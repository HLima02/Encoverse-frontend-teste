import { create } from 'zustand'
import type { UserState } from '../types'

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: (user) => set({ user, isAuthenticated: true, loading: false }),
  setLoading: (loading) => set({ loading }),
  logout: () => set({ user: null, isAuthenticated: false, loading: false }),
}))
