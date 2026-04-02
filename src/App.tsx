import { useEffect } from 'react'
import { useProdutoStore } from './store/useProdutoStore'

export default function App() {
  const { produtos, loading, error, fetchProdutos } = useProdutoStore()

  useEffect(() => {
    fetchProdutos()
  }, [fetchProdutos])

  if (loading) return <div>Carregando produtos...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Produtos ({produtos.length})</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.productName}>
            <strong>{produto.productName}</strong> - R$ {produto.price / 100}
          </li>
        ))}
      </ul>
    </div>
  )
}
