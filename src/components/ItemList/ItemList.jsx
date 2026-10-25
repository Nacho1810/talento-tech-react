import { Link } from "react-router-dom"
import "./ItemList.css"
import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {
  if (!products.length) return <p className="status-message">No hay productos en este momento</p>

  return <div className="product-list">
    {products
      .map((product) => (
        <Link className="product-link" to={`/product/${product.id}`} key={product.id} >
          <Item {...product} />
        </Link>)
      )
    }
  </div>
}