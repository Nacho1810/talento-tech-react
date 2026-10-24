import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "./Cart.css"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"

export const CartView = () => {
  const { cart } = useCart()

  return <section className="cart-view">
    <h1>Tu Carrito de Compras</h1>
    {cart.length
      ? <>
        <CartList />
        <CartSummary />
      </>
      : <>
        <div className="cart-empty">
          <p>El carrito esta vacio</p>
          <Link to={"/"}>Volver</Link>
        </div>
      </>}
  </section>
}