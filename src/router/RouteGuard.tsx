import { Navigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

interface RouteGuardProps {
  children: React.ReactNode
}

export default function RouteGuard({ children }: RouteGuardProps) {
  const { isAuthenticated, loading } = useUserStore()

  if (loading) {
    return <div className='flex_center' style={{ minHeight: '100vh' }}>Carregando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
