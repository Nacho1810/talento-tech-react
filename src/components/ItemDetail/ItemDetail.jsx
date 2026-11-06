import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({ itemDetail, quantity, increaseQuantity, decreaseQuantity, addToCart }) => {
  const { addItem } = useCart()

  return (
    <div className="item-detail">
      <Item {...itemDetail}>
        <p>Cantidad a agregar: <span>{quantity}</span></p>
        <button className="detail-button" onClick={() => increaseQuantity()}> + </button>
        <button className="detail-button" onClick={() => decreaseQuantity()}> - </button>
        <button className="detail-button" onClick={() => {addToCart()}}>
          Agregar al Carrito
        </button>
      </Item>
    </div>
  )
}