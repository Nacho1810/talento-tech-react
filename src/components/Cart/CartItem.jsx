import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"

export const CartItem = ({ item }) => {
  const { removeItem } = useCart()
  return <Item {...item} >
    <p>Cantidad del producto: {item.quantity}</p>
    <button onClick={() => removeItem(item)}>Eliminar producto</button>
  </Item>
}