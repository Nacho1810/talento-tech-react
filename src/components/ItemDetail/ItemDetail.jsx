import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({ itemDetail }) => {
  const {addItem} = useCart()
  
  return (
    <div className="item-detail">
      <Item {...itemDetail}>
        <button className="detail-button" onClick={() => addItem(itemDetail, 1)}>
          Agregar al Carrito
        </button>
      </Item>
    </div>
  )
}