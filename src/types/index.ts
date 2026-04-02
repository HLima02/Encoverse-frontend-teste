export interface User {
  id: string
  nome: string
  email: string
}

export interface UserState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  logout: () => void
}

export interface Produto {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProdutosResponse {
  success: boolean
  products: Produto[]
}

export interface ProdutoState {
  produtos: Produto[]
  loading: boolean
  error: string | null
  setProdutos: (produtos: Produto[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  fetchProdutos: () => Promise<void>
}
