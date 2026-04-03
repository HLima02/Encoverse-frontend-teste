export interface User {
  id: string
  nome: string
  email: string
}

export interface Profile {
  id: string
  nome: string
  email: string
  telefone: string
  rua: string
  bairro: string
  cidade: string
  estado: string
  cep: string
}

export interface UserState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  setUser: (user: User) => void
  setLoading: (loading: boolean) => void
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

export interface CartItem {
  image: string
  name: string
  price: number
  quantity: number
}

export interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (name: string) => void
  updateQuantity: (name: string, quantity: number) => void
  clearCart: () => void
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
