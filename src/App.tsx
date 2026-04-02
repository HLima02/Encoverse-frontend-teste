import { useEffect } from 'react'
import { useProdutoStore } from './store/useProdutoStore'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function App() {
  const { produtos, loading, error, fetchProdutos } = useProdutoStore()

  useEffect(() => {
    fetchProdutos()
  }, [fetchProdutos])

  if (loading) return <div>Carregando produtos...</div>
  if (error) return <div>{error}</div>

  return (
    <RouterProvider router={router} />
  )
}
