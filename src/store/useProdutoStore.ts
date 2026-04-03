import { create } from 'zustand'
import type { ProdutoState, ProdutosResponse } from '../types'

const API_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const useProdutoStore = create<ProdutoState>((set) => ({
  produtos: [],
  loading: false,
  error: null,
  setProdutos: (produtos) => set({ produtos }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  fetchProdutos: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch(API_URL)
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const data: ProdutosResponse = await response.json()
      set({ produtos: data.products, loading: false })
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      set({ error: 'Erro ao carregar produtos', loading: false })
    }
  },
}))
