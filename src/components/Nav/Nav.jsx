import { Link } from "react-router-dom"
import "./Nav.css"
import { useCart } from "../../context/CartContext"

export const Nav = () => {
  const {getTotalItems} = useCart()
  const totalItem = getTotalItems()
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      <ul className="main-nav-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">Carrito {totalItem > 0 && <span className="counter">{totalItem}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}