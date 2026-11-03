import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import "./ProtectedRoute.css"


export const ProtectedRoute = ({children}) => {
  const {user, loading} = useAuth()

  if (loading) {
    return (
      <div className="admin-loading-state" role="status" aria-live="polite">
        <span className="admin-loading-spinner" aria-hidden="true" />
        <p>Cargando...</p>
      </div>
    )
  }

  if (!user) return <Navigate to="/admin/login" />

  return children
}