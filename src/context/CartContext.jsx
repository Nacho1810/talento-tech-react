import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();


// Consumidor para acceder a la información del contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}

// configuramos el Provedor (que componentes envuelve)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  //para navegacion programática
  const navigate = useNavigate()

  const isInCart = (product) => {
    const inCart = cart.some((prod) => prod.id === product.id)
    return inCart;
  }

  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      const updatedCart = cart.map(
        prod => prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod)
      setCart(updatedCart)
    } else {
      //la forma funcional se aseguro de acarrar el carrito een el estado anterior siempre
      setCart(prevCart => [...prevCart, { ...item, quantity }])
    }
    alert(`El producto ${item.name} se agregó al carrito`)
  }

  const removeItem = (item) => {
    setCart((prev) => prev.filter((element) => element.id !== item.id))
    alert(`Producto  ${item.name} eliminado`)
  }

  const clearCart = () => {
    setCart([])
    alert("Carrito vaciado exitosamente")
  }

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const checkout = () => {
    alert("Su compra ha sido realizada")
    setCart([])
    navigate("/")
  }

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout
  }

  return <CartContext.Provider value={values}>
    {children}
  </CartContext.Provider>
}
