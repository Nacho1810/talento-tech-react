import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({ itemDetail }) => {
  return (
    <div className="item-detail">
      <Item {...itemDetail}>
        <button className="detail-button">
          Agregar al Carrito
        </button>
      </Item>
    </div>
  )
}