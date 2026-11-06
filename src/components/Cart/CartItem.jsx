import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"

export const CartItem = ({ item }) => {
  const { removeItem, addItem, subtractItem } = useCart()
  return <Item {...item} >
    <p>Cantidad del producto: {item.quantity}</p>
    <button onClick={() => addItem(item, 1)}> + </button>
    {/* Funciona pero no se si es "elegante" para las reglas de negocio */}
    <button onClick={() => subtractItem(item)}> - </button>
    <button onClick={() => removeItem(item)}>Eliminar producto</button>
  </Item>
}