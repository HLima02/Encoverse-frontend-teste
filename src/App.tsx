import { useEffect } from 'react'
import { useProdutoStore } from './store/useProdutoStore'
import { useUserStore } from './store/useUserStore'
import { supabase } from './lib/supabase'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const { loading, error, fetchProdutos } = useProdutoStore()
  const { setUser, logout: storeLogout } = useUserStore()

  useEffect(() => {
    fetchProdutos()
  }, [fetchProdutos])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            nome: session.user.user_metadata?.nome ?? '',
            email: session.user.email ?? '',
          })
        } else {
          storeLogout()
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [setUser, storeLogout])

  if (loading) return <div>Carregando produtos...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
