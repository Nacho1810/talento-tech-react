import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Panel de administración</h2>

        <div className="dashboard-header-actions">
          <Link className="dashboard-button dashboard-button-secondary" to="/">
            Volver a la tienda
          </Link>
          <button className="dashboard-button" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="dashboard-section">
        <h3>Acciones rápidas</h3>

        <div className="dashboard-actions">
          <Link to="/admin/products/new" className="dashboard-action">
            Cargar
          </Link>

          <Link to="#" className="dashboard-action">
            Modificar
          </Link>

          <Link to="#" className="dashboard-action">
            Eliminar
          </Link>
        </div>
      </section>

      <section className="dashboard-section dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda.</p>
      </section>
    </div>
  );
};