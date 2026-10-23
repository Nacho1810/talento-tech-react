import { Link } from "react-router-dom"
import "./Nav.css"

export const Nav = () => {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <ul className="main-nav-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}